import { Clock } from "lucide-react";

export const productCard = [
    {
        id: 1,
        title: "Total Project",
        value: 6784,
        percentage: 10,
        isIncrease: true,
        increaseValue: 150,
        icon: <Clock className="w-6 h-6 text-blue-600" />
    },
    {
        id: 1,
        title: "In Progress",
        value: 1920,
        percentage: 20,
        isIncrease: false,
        increaseValue: 150,
        icon: <Clock className="w-6 h-6 text-blue-600" />
    },
    {
        id: 1,
        title: "Finish",
        value: 4214,
        percentage: 10,
        isIncrease: true,
        increaseValue: 250,
        icon: <Clock className="w-6 h-6 text-blue-600" />
    },
]