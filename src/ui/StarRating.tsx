type Props = {
  rating: number;
  size?: number;
};

export default function StarRating({ rating }: Props) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        if (rating >= star) {
          return <FullStar key={star} />;
        }
        if (rating >= star - 0.5) {
          return <HalfStar key={star} />;
        }
        return <EmptyStar key={star} />;
      })}
    </div>
  );
}

function FullStar() {
  return (
    <svg
      className={`w-5 h-5 text-yellow-400`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.384 2.457a1 1 0 00-.364 1.118l1.287 3.97c.3.922-.755 1.688-1.54 1.118l-3.384-2.457a1 1 0 00-1.176 0L5.34 16.99c-.784.57-1.838-.196-1.539-1.118l1.286-3.97a1 1 0 00-.364-1.118L1.34 9.397c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.97z" />
    </svg>
  );
}

function HalfStar() {
  return (
    <svg className={`w-5 h-5 viewBox="0 0 20 20`}>
      <defs>
        <linearGradient id="half">
          <stop offset="50%" stopColor="#facc15" />
          <stop offset="50%" stopColor="#d1d5db" />
        </linearGradient>
      </defs>

      <path
        fill="url(#half)"
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.384 2.457a1 1 0 00-.364 1.118l1.287 3.97c.3.922-.755 1.688-1.54 1.118l-3.384-2.457a1 1 0 00-1.176 0L5.34 16.99c-.784.57-1.838-.196-1.539-1.118l1.286-3.97a1 1 0 00-.364-1.118L1.34 9.397c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.97z"
      />
    </svg>
  );
}

function EmptyStar() {
  return (
    <svg
      className={`w-5 h-5 text-gray-300`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.384 2.457a1 1 0 00-.364 1.118l1.287 3.97c.3.922-.755 1.688-1.54 1.118l-3.384-2.457a1 1 0 00-1.176 0L5.34 16.99c-.784.57-1.838-.196-1.539-1.118l1.286-3.97a1 1 0 00-.364-1.118L1.34 9.397c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.97z" />
    </svg>
  );
}
