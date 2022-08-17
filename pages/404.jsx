import Link from 'next/link';
import Button from '../components/Button/BaseButton';
import Navbar from '../components/layout/Navbar';
import ErrorIcon from '../public/svgs/error-page.svg';

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <div className="fixed flex min-h-screen w-full items-center justify-center bg-primary-light">
        <div className="text-center">
          <ErrorIcon width="448.33" height="363.598" className="mx-auto hidden lg:block" />
          <ErrorIcon className="mx-auto block lg:hidden" />
          <div className="mt-4 text-2xl font-bold lg:text-4xl">Page not Found</div>
          <Link href="/">
            <a>
              <Button className="mt-5">Go back home</Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
