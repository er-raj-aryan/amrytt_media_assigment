import {  IndianRupee, Layers2Icon, ShoppingBagIcon } from "lucide-react";

export const productCard = [
    {
        id: 1,
        title: "Total Amount",
        value: 6784,
        percentage: 10,
        isIncrease: true,
        increaseValue: 150,
        icon: <IndianRupee className="w-6 h-6 text-blue-600" />
    },
    {
        id: 2,
        title: "Total Product",
        value: 1920,
        percentage: 20,
        isIncrease: false,
        increaseValue: 150,
        icon: <ShoppingBagIcon className="w-6 h-6 text-blue-600" />
    },
    {
        id: 3,
        title: "Total Category",
        value: 4214,
        percentage: 10,
        isIncrease: true,
        increaseValue: 250,
        icon: <Layers2Icon className="w-6 h-6 text-blue-600" />
    },
]