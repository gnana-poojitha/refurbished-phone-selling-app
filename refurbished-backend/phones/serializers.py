
from rest_framework import serializers
from .models import Phone

class PhoneSerializer(serializers.ModelSerializer):
    # Read-only computed fields
    platform_fees = serializers.SerializerMethodField(read_only=True)
    platform_profits = serializers.SerializerMethodField(read_only=True)
    condition_mapping = serializers.SerializerMethodField(read_only=True)
    best_platform = serializers.SerializerMethodField(read_only=True)
    profitable_platforms = serializers.SerializerMethodField()
    

    class Meta:
        model = Phone
        fields = (
            'id',
            'name',
            'cost_price',
            'selling_price',
            'condition',
            'stock',
            'sold_b2b',
            'sold_direct',
            'platform_fees',
            'platform_profits',
            'condition_mapping',
            'best_platform',
            'profitable_platforms',

        )

    def get_platform_fees(self, obj):
        return obj.platform_fees()

    def get_platform_profits(self, obj):
        return obj.platform_profits()

    def get_condition_mapping(self, obj):
        return obj.condition_mapping()

    def get_best_platform(self, obj):
        return obj.best_platform()


    def get_profitable_platforms(self, obj):
        return obj.profitable_platforms()



