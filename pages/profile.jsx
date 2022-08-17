import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { userSelector } from '../slices/user';
import { userSignOut } from '../slices/persist';
import { useRouter } from 'next/router';

import ConversationIcon from '../public/svgs/conversation.svg';

import Tabs from '../components/tabs';
import SocialCard from '../components/SocialCard';
import UserProfile from '../components/UserProfile';
import Security from '../components/Security';
import Notifications from '../components/Notifications';
import UserProfileDetails from '../components/UserProfileDetails';

export default function Profile() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { me } = useSelector(userSelector);
  const tabsData = [
    { id: 0, name: 'Personal Info' },
    { id: 1, name: 'Security' },
    { id: 1, name: 'Notifications' },
  ];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="pt-12 lg:pt-0">
      {!me && (
        <div className="pt-5 sm:pt-10">
          <div className="min-h-screen w-full rounded-xl bg-primary-light sm:bg-white"></div>
        </div>
      )}
      {me && (
        <div className="pt-5">
          <div className="lg:shadow-soft-lg relative top-5 flex flex-col rounded-xl lg:bg-white">
            <div className="mt-5 hidden py-3 px-7 lg:block">
              <div className="flex w-full items-center justify-center sm:justify-between">
                <h3 className="flex items-start text-xl font-bold text-font-dark">Settings</h3>
              </div>
            </div>
            <div className="hidden lg:block">
              <Tabs data={tabsData} activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className="grid pb-5 lg:grid-cols-2 lg:border-t lg:pb-24">
              <div className="pt-5 lg:pt-20">
                <div className="block lg:hidden">
                  <UserProfile user={me} />
                  <div className="shadow-soft mt-6 rounded-2xl pt-4">
                    <Tabs data={tabsData} activeTab={activeTab} setActiveTab={setActiveTab} small />
                    {activeTab === 0 && <UserProfileDetails user={me} />}
                    {activeTab === 1 && <Security />}
                    {activeTab === 2 && <Notifications />}
                    <div
                      onClick={() => {
                        dispatch(userSignOut());
                        router.push('/logout');
                      }}
                      className="mt-4 border-t py-5 text-center font-bold text-red-600"
                    >
                      Logout
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block">
                  {activeTab === 0 && (
                    <UserProfile user={me}>
                      <UserProfileDetails user={me} />
                    </UserProfile>
                  )}
                  {activeTab === 1 && <Security />}
                  {activeTab === 2 && <Notifications />}
                </div>
              </div>
              <div className="pt-5 lg:border-l lg:pt-20">
                <div className="mx-auto rounded-2xl bg-white px-4 py-10 text-center shadow-sm lg:max-w-sm lg:border lg:py-16">
                  <ConversationIcon className="mx-auto" />
                  <div className="mt-6 text-xl font-bold text-primary-darker">Need Help?</div>
                  <div className="mt-2 text-xs text-gray-400">
                    Having trouble? or want to make enquires on <br /> our products and services?
                  </div>
                  <button className="mt-8 rounded-lg bg-primary-base px-4 py-2 text-sm font-semibold text-primary-light active:opacity-80 lg:px-6">
                    Live chat with our agent
                  </button>
                  <div className="block lg:hidden">
                    <div className="my-5 text-xs text-gray-500">Or</div>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light">
                        <FontAwesomeIcon icon={faPhoneAlt} className="h-5 w-5" />
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light">
                        <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-10">
                    <SocialCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
