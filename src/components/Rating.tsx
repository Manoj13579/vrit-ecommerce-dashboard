import { Rating as RatingType } from "@/types/product";

export default function Rating({ rate, count }: RatingType) {
  return (
    <div className="flex items-center text-sm text-yellow-600">
      ⭐ {rate.toFixed(1)} <span className="ml-1 text-gray-500">({count})</span>
    </div>
  );
}