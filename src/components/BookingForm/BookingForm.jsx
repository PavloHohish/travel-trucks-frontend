import css from './BookingForm.module.css';
import clsx from 'clsx';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

import DatePickerField from '../DatePickerField/DatePickerField';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'The name must consist of at least 3 characters')
    .max(40, 'The name must contain a maximum of 40 characters')
    .required('Name is required'),
  email: Yup.string()
    .min(6, 'Email address must contain at least 6 characters')
    .max(30, 'Email address must contain no more than 30 characters')
    .required('Email is required')
    .email('Please enter a valid email address'),
  date: Yup.date()
    .typeError('Invalid date format')
    .required('Booking date is required')
    .min(new Date(), 'Only future dates!'),
  comment: Yup.string().trim().max(500, "Comment can't exceed 500 characters"),
});

const initialValues = {
  name: '',
  email: '',
  date: '',
  comment: '',
};

const handleSubmit = (values, actions) => {
  toast.success('Camper successfully booked!', {
    style: {
      color: '#101828',
      backgroundColor: 'lightgreen',
    },
  });
  actions.resetForm();
};

export default function BookingForm() {
  return (
    <div className={css.bookingContainer}>
      <h3 className={css.formTitle}>Book your campervan now</h3>
      <p className={css.formDescr}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={FeedbackSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form} autoComplete="off">
          <div className={css.fieldWraper}>
            <Field
              className={css.input}
              type="text"
              placeholder="Name*"
              name="name"
              required
            />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>
          <div className={css.fieldWraper}>
            <Field
              className={css.input}
              type="email"
              placeholder="Email*"
              name="email"
              required
            />
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>
          <div className={css.fieldWraper}>
            <Field
              className={css.input}
              component={DatePickerField}
              placeholder="Booking date*"
              name="date"
            />
            <ErrorMessage name="date" component="div" className={css.error} />
          </div>
          <div className={css.fieldWraper}>
            <Field
              as="textarea"
              name="comment"
              className={clsx(css.input, css.textArea)}
              placeholder="Comment"
              rows={3}
            />
            <ErrorMessage
              name="comment"
              component="div"
              className={css.error}
            />
          </div>
          <button className="button" type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
}
