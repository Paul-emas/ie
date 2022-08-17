import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import TimesIcon from '../../public/svgs/times.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import { isMobile } from 'react-device-detect';

const Modal = ({ isAuth, title, close, border = true, goBack, children }) => {
  const modalBox = useRef();
  const modalOverlay = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    if (!isMobile) {
      tl.fromTo(modalOverlay.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2 });
      tl.fromTo(
        modalBox.current,
        { autoAlpha: 0, visibility: 'hidden', scale: 0.8 },
        { autoAlpha: 1, visibility: 'visible', scale: 1, duration: 0.2, delay: 0.1 },
      );
    } else if (isMobile && isAuth) {
      tl.fromTo(modalOverlay.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2 });
      tl.fromTo(
        modalBox.current,
        { autoAlpha: 0, scaleX: 0.9 },
        { autoAlpha: 1, scaleX: 1, duration: 0.3, delay: 0.1 },
      );
    } else {
      tl.fromTo(modalOverlay.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2 });
      tl.fromTo(
        modalBox.current,
        { autoAlpha: 0, y: '40%' },
        { autoAlpha: 1, y: 0, duration: 0.3, delay: 0.1,  },
        '<',
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 min-h-full w-full overflow-hidden">
      <div
        className={`${
          isAuth ? 'sm:flex' : 'flex items-end'
        } absolute inset-0 h-full w-full justify-center sm:items-center`}
      >
        <div
          onClick={() => close()}
          id="modal-overlay"
          className={`${
            isAuth ? 'bg-white lg:bg-secondary-modal lg:bg-opacity-70' : 'bg-secondary-modal bg-opacity-70'
          } modal-overlay absolute min-h-screen w-full`}
          ref={modalOverlay}
        ></div>
        <div className={`${isAuth ? 'px-3 pt-10 sm:px-0 sm:pt-0' : ''} w-full xs:w-modal`}>
          <div
            className={`${
              isAuth ? 'rounded-2xl' : 'modal-card rounded-t-3xl sm:rounded-3xl'
            } shadow-soft w-full overflow-y-auto bg-white pt-5 pb-12 xl:overflow-auto`}
            ref={modalBox}
          >
            <div className={`${border && 'border-b border-gray-100'} h-14 text-xl`}>
              <div className="px-4 sm:px-8">
                <div className="relative">
                  {goBack && (
                    <button
                      onClick={() => goBack()}
                      className="relative flex w-28 items-center justify-center rounded-lg bg-primary-light py-2 text-sm font-semibold hover:opacity-80"
                    >
                      <FontAwesomeIcon icon={faChevronLeft} className="mr-2 h-3 w-3" />
                      <span className="mt-0.5">Go back</span>
                    </button>
                  )}
                  {title && (
                    <div className="relative top-1 text-center font-bold">
                      <span>{title}</span>
                    </div>
                  )}
                  <button onClick={() => close()} className={`absolute top-0 right-0 float-right`}>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-50 active:bg-gray-100">
                      <TimesIcon />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  setOpen: PropTypes.func,
  goBack: PropTypes.func,
};

export default Modal;
