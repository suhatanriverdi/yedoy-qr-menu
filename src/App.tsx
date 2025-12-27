import "./index.css";
import { menu } from "./menu";
import CategoryHeader from "./components/CategoryHeader";
import BackToTop from "./components/BackToTop";

export default function App() {
  const formatPrice = (n: number) => `${n.toLocaleString("tr-TR")}₺`;

  return (
    <div className="min-h-screen bg-brand-soft dark:bg-neutral-900 font-nunito text-neutral-900 dark:text-neutral-100">
      <div className="app-container">
        {/* Header */}
        <header className="py-5 text-center">
          <h1 className="text-2xl font-extrabold text-brand dark:text-white">
            YEDOY
          </h1>
          <p className="mt-1 text-sm opacity-70">Geleneksel Lezzetler</p>
        </header>

        {/* Menu */}
        <main>
          {menu.map((category) => (
            <section key={category.category} className="mb-10">
              {/* Category Header (sticky) */}
              <CategoryHeader title={category.category} />

              {/* Items */}
              <div className="space-y-4 p-3">
                {category.items.map((item) => (
                  <article
                    key={item.name}
                    className="overflow-hidden rounded-2xl bg-white dark:bg-neutral-800/50 shadow-[0px_0px_6px_1px_rgba(0,0,0,0.2)] dark:shadow-[0px_0px_6px_1px_rgba(255,255,255,0.3)]"
                    aria-label={item.name}
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}images/${item.image}`}
                      alt={item.name}
                      loading="lazy"
                      className="aspect-4/3 w-full object-cover"
                    />

                    <div className="p-4">
                      <div className="mb-3 text-xl font-semibold leading-tight wrap-break-word">
                        {item.name}
                      </div>

                      <div className="space-y-2">
                        {item.sizes.map((s) => (
                          <div
                            key={s.size}
                            className="price-row flex items-center justify-between rounded-xl bg-brand-soft dark:bg-neutral-700/50 px-2 py-2 text-base"
                            role="button"
                            tabIndex={0}
                          >
                            <span className="text-neutral-700 dark:text-white">
                              {s.size}
                            </span>
                            <span className="font-semibold">
                              {formatPrice(s.price)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </main>

        <footer className="pb-20 text-center text-lg text-black dark:text-white">
          Afiyet olsun 🍽️
        </footer>

        {/* Back to top button */}
        <BackToTop />
      </div>
    </div>
  );
}
