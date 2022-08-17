import { useEffect, useState } from 'react';
import Link from 'next/link';

const Policy = () => {
  return (
    <div className="terms mx-auto px-4 xl:container xl:px-14">
      <div className="py-24 lg:py-36">
        <div className="mx-auto max-w-3xl">
          <h1 className="my-4 text-center text-2xl font-bold text-primary-dark lg:mb-8 lg:text-left lg:text-4.5xl lg:text-black">
            Privacy and Policy
          </h1>
          <p className="text-center text-sm text-gray-400 lg:text-left lg:text-base">
            We use your data to provide and improve the Service. By using the Service, you agree to the collection and
            use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms
            used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from
            www.instantenergy.com.ng
          </p>
          <div className="mt-14">
            <div className="text-lg font-semibold lg:text-2xl">Information Collection and Use</div>
            <div className="my-5 text-justify text-sm leading-relaxed lg:text-base lg:leading-loose">
              We collect several different types of information for various purposes to provide and improve our Service
              to you.
            </div>
            <div className="my-5 text-xl font-semibold">Types of Data Collected</div>
            <div className="text-base font-semibold lg:text-lg">Personal Data</div>
            <div className="my-5 text-justify text-sm leading-relaxed lg:text-base lg:leading-loose">
              <ol className="list-disc pl-4">
                <li>
                  While using our Service, we may ask you to provide us with certain personally identifiable information
                  that can be used to contact or identify you (“Personal Data”). Personally, identifiable information
                  may include, but is not limited to:
                  <ul className="list-disc pl-4 text-sm leading-relaxed lg:leading-loose">
                    <li>Email address</li>
                    <li>First name and last name</li>
                    <li>Phone number</li>
                    <li>Cookies and Usage Data</li>
                  </ul>
                </li>
              </ol>
            </div>
            <div className="text-base font-semibold lg:text-lg">Usage Data</div>
            <div className="my-5 text-justify text-sm leading-relaxed lg:text-base lg:leading-loose">
              We may also collect information how the Service is accessed and used (“Usage Data”). This Usage Data may
              include information such as your computer’s Internet Protocol address (e.g. IP address), browser type,
              browser version, the pages of our Service that you visit, the time and date of your visit, the time spent
              on those pages, unique device identifiers and other diagnostic data.
            </div>
            <div className="text-lg font-semibold lg:text-2xl">Tracking & Cookies Data</div>
            <div className="my-5 text-justify text-sm leading-relaxed lg:text-base lg:leading-loose">
              We use cookies and similar tracking technologies to track the activity on our Service and hold certain
              information.
            </div>
            <div className="my-5 text-justify text-sm leading-relaxed lg:text-base lg:leading-loose">
              Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are
              sent to your browser from a website and stored on your device. Tracking technologies also used are
              beacons, tags, and scripts to collect and track information and to improve and analyze our Service.
            </div>
            <div className="my-5 text-justify text-sm leading-relaxed lg:text-base lg:leading-loose">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However,
              if you do not accept cookies, you may not be able to use some portions of our Service.
            </div>
            <div className="my-5 text-justify text-sm leading-relaxed lg:text-base lg:leading-loose">
              <ul className="list-disc pl-4">
                <li>
                  Examples of Cookies we use:
                  <ul className="list-disc pl-4 text-sm leading-relaxed lg:leading-loose">
                    <li>
                      <strong>Session Cookies</strong>. We use Session Cookies to operate our Service.
                    </li>
                    <li>
                      <strong>Preference Cookies</strong>. We use Preference Cookies to remember your preferences and
                      various settings.
                    </li>
                    <li>
                      <strong>Security Cookies</strong>. We use Security Cookies for security purposes.
                    </li>
                    <li>Cookies and Usage Data</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="text-lg font-semibold lg:text-2xl">Use of Data</div>
            <div className="my-5 text-justify text-sm leading-relaxed lg:text-base lg:leading-loose">
              Instant Energy Technologies and Renewables LTD uses the collected data for various purposes:
              <ul className="list-disc pl-8 text-sm leading-relaxed lg:leading-loose">
                <li>To provide and maintain the Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                <li>To provide customer care and support</li>
                <li>To provide analysis or valuable information so that we can improve the Service</li>
                <li>To monitor the usage of the Service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </div>
            <div className="text-lg font-semibold lg:text-2xl">Transfer of Data</div>
            <div className="lg:text leading-relaxed-base my-5 text-justify text-sm lg:leading-loose">
              Your information, including Personal Data, may be transferred to — and maintained on — computers located
              outside of your state, province, country or other governmental jurisdiction where the data protection laws
              may differ than those from your jurisdiction.
            </div>
            <div className="my-5 text-justify text-sm leading-relaxed lg:text-base lg:leading-loose">
              If you are located outside Nigeria and choose to provide information to us, please note that we transfer
              the data, including Personal Data, to Nigeria and process it there.
            </div>
            <div className="lg:text leading-relaxed-base my-5 text-justify text-sm lg:leading-loose">
              Your consent to this Privacy Policy followed by your submission of such information represents your
              agreement to that transfer.
            </div>
            <div className="my-5 text-justify text-sm leading-relaxed lg:text-base lg:leading-loose">
              Instant Energy Technologies and Renewables LTD will take all steps reasonably necessary to ensure that
              your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal
              Data will take place to an organization or a country unless there are adequate controls in place including
              the security of your data and other personal information.
            </div>
            <div className="text-lg font-semibold lg:text-2xl">Disclosure of Data</div>
            <div className="my-5 text-xl font-semibold">Legal Requirements</div>
            <div className="my-5 text-justify text-sm leading-relaxed lg:text-base lg:leading-loose">
              Instant Energy Technologies and Renewables LTD may disclose your Personal Data in the good faith belief
              that such action is necessary to:
              <ul className="list-disc pl-8 text-sm leading-relaxed lg:leading-loose">
                <li>To comply with a legal obligation</li>
                <li>
                  To protect and defend the rights or property of Instant Energy Technologies and Renewables LTD and
                  Instant Energy B.V.
                </li>
                <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                <li>To protect the personal safety of users of the Service or the public</li>
                <li>To protect against legal liability</li>
              </ul>
            </div>
            <div className="text-lg font-semibold lg:text-2xl">Security of Data</div>
            <div className="my-5 text-justify text-sm leading-relaxed lg:text-base lg:leading-loose">
              The security of your data is important to us, but remember that no method of transmission over the
              Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable
              means to protect your Personal Data, we cannot guarantee its absolute security.
            </div>
            <div className="text-lg font-semibold lg:text-2xl">Service Providers</div>
            <div className="my-5 text-justify text-sm leading-relaxed lg:text-base lg:leading-loose">
              The security of your data is important to us, but remember that no method of transmission over the
              Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable
              means to protect your Personal Data, we cannot guarantee its absolute security.
            </div>
            <div className="my-5 text-justify text-sm leading-relaxed lg:text-base lg:leading-loose">
              These third parties have access to your Personal Data only to perform these tasks on our behalf and are
              obligated not to disclose or use it for any other purpose.
            </div>
            <div className="my-5 text-xl font-semibold">Analytics</div>
            <div className="my-5 text-justify text-sm leading-relaxed lg:text-base lg:leading-loose">
              We may use third-party Service Providers to monitor and analyze the use of our Service.
              <ul className="list-disc pl-8 text-sm leading-relaxed lg:leading-loose">
                <li>
                  <strong>Google Analytics</strong>: is a web analytics service offered by Google that tracks and
                  reports website traffic. Google uses the data collected to track and monitor the use of our Service.
                  This data is shared with other Google services. Google may use the collected data to contextualize and
                  personalize the ads of its own advertising network. You can opt-out of having made your activity on
                  the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on.
                  The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing
                  information with Google Analytics about visits activity. For more information on the privacy practices
                  of Google, please visit the Google Privacy & Terms web page:{' '}
                  <a
                    target="_blank"
                    href="https://policies.google.com/privacy?hl=en"
                    className="text-secondary-green hover:underline"
                    rel="noreferrer"
                  >
                    https://policies.google.com/privacy?hl=en
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-lg font-semibold lg:text-2xl">Links to Other Sites</div>
            <div className="my-5 text-justify text-sm leading-relaxed lg:text-base lg:leading-loose">
              Our Service may contain links to other sites that are not operated by us. If you click on a third-party
              link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy
              of every site you visit.
            </div>
            <div className="my-5 text-justify text-sm leading-relaxed lg:text-base lg:leading-loose">
              We have no control over and assume no responsibility for the content, privacy policies or practices of any
              third-party sites or services.
            </div>
            <div className="text-lg font-semibold lg:text-2xl">Children’s Privacy</div>
            <div className="lg:text leading-relaxed-base my-5 text-justify text-sm lg:leading-loose">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page.
            </div>
            <div className="my-5 text-justify text-sm leading-relaxed lg:text-base lg:leading-loose">
              We will let you know via email and/or a prominent notice on our Service, prior to the change becoming
              effective and update the “effective date” at the top of this Privacy Policy.
            </div>
            <div className="lg:text leading-relaxed-base my-5 text-justify text-sm lg:leading-loose">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy
              are effective when they are posted on this page.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
