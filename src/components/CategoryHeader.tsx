type Props = { title: string };
export default function CategoryHeader({ title }: Props) {
  return (
    <h2 className="sticky top-2 z-20 mb-4 mx-6 rounded-2xl bg-white/80 dark:bg-neutral-900/80 px-4 py-3 text-center text-2xl font-bold shadow-[0px_0px_6px_1px_rgba(0,0,0,0.2)] dark:shadow-[0px_0px_6px_1px_rgba(255,255,255,0.3)] text-neutral-900 dark:text-neutral-100 backdrop-blur">
      {title}
    </h2>
  );
}
