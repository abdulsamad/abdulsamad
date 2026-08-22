import { component$, useSignal } from '@builder.io/qwik';

const Logo = component$(() => (
  <svg viewBox="0 0 113.687 24.718" role="img" height="35" fill="#fff" aria-label="AbdulSamad">
    <title>AbdulSamad</title>
    <text x="0" y="19" font-size="18" font-family="Nunito, sans-serif" font-weight="700">
      AbdulSamad
    </text>
  </svg>
));

export default component$(() => {
  const open = useSignal(false);

  return (
    <header class="flex items-center justify-center p-4">
      <a class="mx-auto" href="/">
        <Logo />
      </a>

      <nav
        id="site-nav"
        class={[
          'animate-nav absolute top-16 bg-[#0F182A] p-5 transition-opacity duration-300 ease-out md:top-0 md:right-0 md:flex',
          open.value ? 'flex w-full justify-center' : 'hidden',
        ]}
      >
        <a
          href="https://blog.abdulsamad.dev"
          target="_blank"
          rel="noopener"
          class="bg-primary ml-0 flex h-8 w-28 items-center justify-center rounded-full px-5 text-center text-[#f5f5f5_!important] no-underline md:mx-auto"
        >
          Blog
        </a>
      </nav>

      <button
        id="menu-toggle"
        type="button"
        aria-controls="site-nav"
        aria-expanded={open.value}
        aria-label={open.value ? 'Close menu' : 'Open menu'}
        onClick$={() => (open.value = !open.value)}
        class="focus:outline- relative z-50 flex size-[40px] items-center justify-center border-none p-1 text-slate-50 shadow-sm focus:outline-1 focus:outline-[rgba(87,87,87,0.5)] md:hidden"
      >
        <svg
          class="h-[35px] w-[35px] [&_path]:transition-[stroke-dasharray_450ms_cubic-bezier(0.4,0,0.2,1),_stroke-dashoffset_450ms_cubic-bezier(0.4,0,0.2,1)] [&>*]:fill-none [&>*]:stroke-current [&>*]:stroke-[6]"
          height="35"
          width="35"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <path
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            style={{ strokeDasharray: open.value ? '90 207' : '60 207', strokeDashoffset: open.value ? '-134' : '0' }}
          />
          <path
            d="M 20,50 H 80"
            style={{ strokeDasharray: open.value ? '1 60' : '60 60', strokeDashoffset: open.value ? '-30' : '0' }}
          />
          <path
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            style={{ strokeDasharray: open.value ? '90 207' : '60 207', strokeDashoffset: open.value ? '-134' : '0' }}
          />
        </svg>
        <span class="sr-only">Menu</span>
      </button>
    </header>
  );
});
