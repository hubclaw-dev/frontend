import { updates } from "@/data/updates";

const tagColors: Record<string, string> = {
  auth: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
  route: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
};

const defaultTagColor =
  "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
    new Date(iso),
  );

export default function RecentUpdates() {
  return (
    <section className="w-full max-w-2xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8">Recent Updates</h2>
      <div className="flex flex-col gap-6">
        {updates.map((update) => (
          <div
            key={update.id}
            className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 transition-shadow hover:shadow-md"
          >
            <div className="flex items-center gap-3 mb-2">
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagColors[update.tag] ?? defaultTagColor}`}
              >
                {update.tag}
              </span>
              <time dateTime={update.date} className="text-sm text-neutral-500">
                {formatDate(update.date)}
              </time>
            </div>
            <h3 className="text-lg font-semibold mb-1">{update.title}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {update.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
