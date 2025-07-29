
from django.db import models

class Phone(models.Model):
    CONDITION_CHOICES = [
        ('New', 'New'),
        ('Good', 'Good'),
        ('Scrap', 'Scrap'),
    ]

    name = models.CharField(max_length=100)
    cost_price = models.FloatField()
    selling_price = models.FloatField()
    condition = models.CharField(max_length=10, choices=CONDITION_CHOICES)
    stock = models.IntegerField(default=0)
    sold_b2b = models.BooleanField(default=False)
    sold_direct = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    # ✅ Platform Fees
    def platform_fees(self):
        return {
            'X': self.selling_price * 0.10,
            'Y': self.selling_price * 0.08 + 2,
            'Z': self.selling_price * 0.12,
        }

    # ✅ Profit Calculation
    def platform_profits(self):
        fees = self.platform_fees()
        return {
            'X': self.selling_price - (self.cost_price + fees['X']),
            'Y': self.selling_price - (self.cost_price + fees['Y']),
            'Z': self.selling_price - (self.cost_price + fees['Z']),
        }

    # ✅ Condition Mapping per platform
    def condition_mapping(self):
        mapping = {
            'New': {'X': 'New', 'Y': '3 stars', 'Z': 'New'},
            'Good': {'X': 'Good', 'Y': '2 stars', 'Z': 'As New'},
            'Scrap': {'X': 'Scrap', 'Y': '1 star (Usable)', 'Z': 'Good'},
        }
        return mapping.get(self.condition, {})

    # ✅ Best Platform (Highest Profit and Valid)
    def best_platform(self):
        if self.stock == 0 or self.sold_b2b or self.sold_direct:
            return None  # Cannot list

        profits = self.platform_profits()
        # Filter only platforms with positive profit
        valid_profits = {k: v for k, v in profits.items() if v > 0}

        if not valid_profits:
            return None  # No profitable platform

        return max(valid_profits, key=valid_profits.get)  # Platform with highest profit



    def profitable_platforms(self):
        profits = self.platform_profits()
        return [platform for platform, profit in profits.items() if profit > 0]
