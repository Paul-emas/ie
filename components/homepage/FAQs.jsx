import Link from 'next/link';
import ContactCard from '../ContactCard';
import Accordion from './Accordion';

const FAQs = () => {
  const questions = [
    {
      id: 0,
      name: 'How do I buy electricity units on this platform?',
      ans: `If you are a new user, kindly enter your mobile number and click buy electricity. A page will pop up for you to fill in your meter number, select your state, enter your name(optional), email address and the amount you want to purchase.`,
      ans2: `Once you have done that click proceeds to payment, a page will pop up for you to confirm that all the details you entered is correct and then you can proceed to select your payment option from the list that will be displayed on the screen.`,
    },
    {
      id: 1,
      name: 'Do i need to create an account to buy electricity on this platform?',
      ans: 'No, all you need to do is enter your phone number to start.',
      ans2: 'However, once you are done with your first transaction, we will ask you to create a pin',
    },
    {
      id: 2,
      name: 'Why do i need to fund my wallet?',
      ans: 'We created the wallet feature to help our customers better budget for their energy spending.',
      ans2: 'You can save money in your wallet for a future transaction.',
    },
    {
      id: 4,
      name: 'Where can i find my receipt?',
      ans: 'Kindly click on the transaction on your dashboard to view all your transaction history.',
      ans2: 'The receipt for all transactions can be viewed by clicking on the receipt button under status',
    },
    {
      id: 5,
      name: 'Why is the meter rejecting my token?',
      ans: 'Check that the meter number you purchased is right for the meter in your home.',
      ans2: 'The meter has not yet been activated- An activation code will be required from the distribution company.',
    },
  ];

  return (
    <div className="bg-white py-16 lg:py-32">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="text-center">
          <h1 className="mx-auto max-w-2xl text-center text-2xl font-bold lg:text-5xl ">Frequently Asked Questions</h1>
        </div>
        <div className="mx-auto mt-12 max-w-6xl lg:mt-24 2xl:max-w-5xl">
          {questions.map((question, index) => (
            <Accordion {...question} key={index} />
          ))}
        </div>
        <div className="mt-8 text-center lg:mt-24">
          <p className="text-sm font-semibold text-primary-darker lg:text-base">
            <span>Need help? talk to our</span>
            <a href="https://api.whatsapp.com/send?phone=2349082333376" className="ml-2 text-primary-base">
              Customer support
            </a>
          </p>
        </div>
      </div>
      <div className="card-shadow mx-auto mt-8 hidden w-64 justify-center rounded-xl px-5 py-3 lg:flex">
        <ContactCard />
      </div>
    </div>
  );
};

export default FAQs;
