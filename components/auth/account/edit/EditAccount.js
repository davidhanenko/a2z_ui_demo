import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

import { useForm } from 'react-hook-form';
import { FormStyles } from '../../signup/SignupStyles';

import { EditAccountStyles } from './EditAccountStyles';
import Oval from 'react-loader-spinner';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

const UPDATE_USER = gql`
  mutation UPDATE_USER(
    $id: ID!
    $data: UsersPermissionsUserInput!
  ) {
    updateUsersPermissionsUser(id: $id, data: $data) {
      data {
        id
        attributes {
          username
          phone
          company
          deliveryAddress: delivery_address
        }
      }
    }
  }
`;

export default function EditAccount({ user, id }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
      dirtyFields,
      isDirty,
    },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      username: user?.attributes?.username || '',
      company: user?.attributes?.company || '',
      phone: user?.attributes?.phone || '',
      deliveryAddress:
        user?.attributes?.deliveryAddress || '',
    },
  });

  const [updateUsersPermissionsUser, { loading, error }] =
    useMutation(UPDATE_USER);

  const onSubmitForm = async values => {
    try {
      const { data } = await updateUsersPermissionsUser({
        variables: {
          id: id,
          data: {
            username: values.username,
            company: values.company,
            phone: values.phone,
            delivery_address: values.deliveryAddress,
          },
        },
      });
      const user =
        data?.updateUsersPermissionsUser?.data?.attributes;

      toast.success(
        `Your account has been successfully updated`,
        {
          position: 'top-right',
          autoClose: 6000,
        }
      );
      reset({
        username: user?.username || '',
        company: user?.company || '',
        phone: user?.phone || '',
        deliveryAddress: user?.deliveryAddress || '',
      });
    } catch (err) {
      toast.error(`${err?.message}`, {
        position: 'top-right',
        autoClose: 5000,
      });
    }
  };

  return (
    <EditAccountStyles>
      <h3>Update account information</h3>

      <FormStyles
        isDirty={isDirty}
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <fieldset>
          <label
            className={
              dirtyFields.name ? 'label-dirty' : ''
            }
            htmlFor='username'
          >
            Full Name
          </label>
          <input
            type='text'
            name='username'
            id='username'
            placeholder='Full name'
            className={
              dirtyFields.name ? 'input-dirty' : ''
            }
            {...register('username', {
              disabled: isSubmitting || loading,
              required: 'Name is required',
              minLength: {
                value: 3,
                message: 'Seems to short',
              },
            })}
          />
          {
            <div className='input-error'>
              {errors?.username?.message}
            </div>
          }
        </fieldset>

        <fieldset>
          <label
            className={
              dirtyFields.name ? 'label-dirty' : ''
            }
            htmlFor='company'
          >
            Company
          </label>
          <input
            type='text'
            name='company'
            id='company'
            placeholder='Company name'
            className={
              dirtyFields.company ? 'input-dirty' : ''
            }
            {...register('company', {
              disabled: isSubmitting || loading,
            })}
          />
          {
            <div className='input-error'>
              {errors?.company?.message}
            </div>
          }
        </fieldset>

        <fieldset>
          <label
            className={
              dirtyFields.name ? 'label-dirty' : ''
            }
            htmlFor='phone'
          >
            Phone number
          </label>
          <input
            type='text'
            name='phone'
            id='phone'
            placeholder='1112223333 or 111-222-3333'
            className={
              dirtyFields.phone ? 'input-dirty' : ''
            }
            {...register('phone', {
              disabled: isSubmitting || loading,
              required: 'Phone number is required',
              pattern: {
                value:
                  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gim,
                message:
                  'Please enter a valid phone number',
              },
              minLength: {
                value: 10,
                message: 'Seems to short',
              },
              maxLength: {
                value: 12,
                message: 'Not a phone number',
              },
            })}
          />
          {
            <div className='input-error'>
              {errors?.phone?.message}
            </div>
          }
        </fieldset>
        <fieldset>
          <label
            className={
              dirtyFields.name ? 'label-dirty' : ''
            }
            htmlFor='deliveryAddress'
          >
            Delivery Address
          </label>
          <input
            type='text'
            name='deliveryAddress'
            id='deliveryAddress'
            placeholder='Delivery address'
            className={
              dirtyFields.deliveryAddress
                ? 'input-dirty'
                : ''
            }
            {...register('deliveryAddress', {
              disabled: isSubmitting || loading,
              minLength: {
                value: 10,
                message:
                  'Seems too short to be a valid address',
              },
            })}
          />
          {
            <div className='input-error'>
              {errors?.deliveryAddress?.message}
            </div>
          }
        </fieldset>

        <button
          type='submit'
          disabled={isSubmitting || loading}
        >
          {isSubmitting || loading ? (
            <div>
              <Oval
                type='Oval'
                color='#b5dff0'
                height={20}
                width={20}
              />
            </div>
          ) : (
            <div>update</div>
          )}
        </button>

        <div className='back-to-account-btn'>
          <Link href={`/auth/account/${id}`}>
            Back to account
          </Link>
        </div>
      </FormStyles>
    </EditAccountStyles>
  );
}
