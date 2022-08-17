import { forwardRef } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const FormInput = forwardRef(({ as, type, label, font, error, control, children, className, ...props }, ref) => {
  const As = as;

  const errorStyles =
    type !== 'phone' && type !== 'currency'
      ? `${
          error
            ? 'border-red-600 focus:border-red-600 focus:outline-none'
            : 'border-gray-200 focus:bg-primary-light focus:border-primary-base focus:border-skin-theme focus:outline-none'
        }`
      : `${error ? 'border-red-600 focus:border-red-600 focus:outline-none' : 'border-gray-200'}`;

  return (
    <div className="mb-2.5 2xl:mb-4">
      <label className="label text-xs text-gray-400">{label}</label>
      {type !== 'phone' && type !== 'currency' && type !== 'textarea' && (
        <As
          name={label}
          type={type}
          className={`${className} ${errorStyles} input-field`}
          autoComplete="off"
          {...props}
          ref={ref}
        />
      )}

      {type === 'phone' && (
        <PhoneInput
          country={'ng'}
          containerClass={`${className} ${errorStyles} input-field`}
          inputStyle={{
            border: 'none',
            fontFamily: 'Red Hat Display',
            fontWeight: '700',
            fontSize: '14px',
            height: 'auto',
            width: '100%',
          }}
          inputClass="phone-input"
          placeholder="Enter your phone number"
          // enableSearch
          disableCountryCode
          disableCountryGuess
          disableSearchIcon={true}
          prefix=""
          dropdownStyle={{
            fontWeight: 'normal',
            fontFamily: 'Red Hat Display',
          }}
          {...props}
          ref={ref}
        />
      )}

      {type === 'currency' && (
        <div className={`${className} ${errorStyles} input-field flex py-2.5`}>
          <div className="text capitalize text-primary-base">NGN</div>
          <input
            {...props}
            ref={ref}
            type="number"
            placeholder="0.00"
            autoComplete="off"
            className={`ml-4 w-full font-bold focus:outline-none`}
          />
        </div>
      )}
      {type === 'textarea' && (
        <textarea
          className={`${className} ${errorStyles} input-field mt-2 pt-2.5 pb-9`}
          placeholder="Enter your message here.."
          {...props}
          ref={ref}
        ></textarea>
      )}
      {children}
    </div>
  );
});

FormInput.displayName = 'FormInput';

FormInput.defaultProps = {
  type: 'text',
  as: 'input',
};

export default FormInput;
