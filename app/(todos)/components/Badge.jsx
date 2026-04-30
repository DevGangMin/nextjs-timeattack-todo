const styles = {
  high: "bg-red-100 text-red-700",
  medium: "bg-yellow-100 text-yellow-700",
  low: "bg-gray-100 text-gray-600",
};

const labels = {
  high: "높음",
  medium: "보통",
  low: "낮음",
};

export default function Badge({ priority }) {
  return (
    <span
      className={`shrink-0 inline-block px-2 py-0.5 text-xs font-medium rounded-full ${styles[priority] ?? styles.low}`}
    >
      {labels[priority] ?? priority}
    </span>
  );
}
