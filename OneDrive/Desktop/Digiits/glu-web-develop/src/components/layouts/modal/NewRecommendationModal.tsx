import React, { useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Modal from './Modal';
import FormInput from '../FormInput';
import LocationIcon from '../../../assets/feed/recommendations/search-location.svg';
import TrashIcon from '../../../assets/feed/recommendations/trash-icon.svg';
import ImageIcon from '../../../assets/feed/recommendations/image-icon.svg';
import VideoIcon from '../../../assets/feed/recommendations/video-icon.svg';
import { NewRecommendationModalProps } from './interfaces/IModal';

const validationSchema = Yup.object().shape({
  location: Yup.string().required('Location is required'),
  title: Yup.string().required('Title is required'),
  content: Yup.string().required('Content is required'),
});

const NewRecommendationModal = ({ isOpen, onClose }: NewRecommendationModalProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const initialValues = {
    location: '',
    title: '',
    content: '',
    media: null as File | null,
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
    onClose();
  };

  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>, setFieldValue: (field: string, value: any) => void) => {
    if (e.target.files && e.target.files[0]) {
      setFieldValue('media', e.target.files[0]);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="New Recommendation">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, isValid, dirty, setFieldValue }) => (
          <Form className="p-4">
            <div className="mb-4">
              <FormInput label="Location" active={true}>
                <div className="flex items-center">
                  <img src={LocationIcon} alt="Location" className="w-5 h-5 mr-2" />
                  <Field
                    type="text"
                    name="location"
                    placeholder="Search location..."
                    className="flex-grow p-2 outline-none"
                  />
                </div>
              </FormInput>
              {errors.location && touched.location && (
                <div className="text-red-500 text-sm mt-1">{errors.location}</div>
              )}
              {values.location && (
                <div className="flex items-center justify-between p-2 rounded mt-2">
                  <span>{values.location}</span>
                  <div className="flex items-center">
                    <span className="bg-green-500 text-white py-1 px-2 rounded-full mr-2">Selected</span>
                    <button
                      type="button"
                      onClick={() => setFieldValue('location', '')}
                      className="bg-gray-200 p-1 rounded-full"
                    >
                      <img src={TrashIcon} alt="Remove" className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <FormInput label="Title" active={true}>
              <Field
                type="text"
                name="title"
                className="w-full p-2 outline-none"
              />
            </FormInput>
            {errors.title && touched.title && (
              <div className="text-red-500 text-sm mt-1">{errors.title}</div>
            )}

            <div className="my-4">
              <FormInput label="What do you want to share?" active={true}>
                <Field
                  as="textarea"
                  name="content"
                  className="w-full p-2 outline-none resize-none"
                  rows={4}
                />
              </FormInput>
              {errors.content && touched.content && (
                <div className="text-red-500 text-sm mt-1">{errors.content}</div>
              )}
            </div>

            {values.media && (
              <div className="relative mb-4">
                {(values.media as File).type.startsWith('image') ? (
                  <img src={URL.createObjectURL(values.media as File)} alt="Uploaded media" className="w-full rounded-lg" />
                ) : (
                  <video src={URL.createObjectURL(values.media as File)} controls className="w-full rounded-lg" />
                )}
                <button
                  type="button"
                  onClick={() => setFieldValue('media', null)}
                  className="absolute bottom-2 right-2 bg-red-600 text-white p-1 rounded-full"
                >
                  Remove
                </button>
              </div>
            )}

            <div className="flex justify-between items-center bg-light-blue p-2 rounded-lg mb-4">
              <span>Add to your post</span>
              <div>
                <label className="cursor-pointer mx-6">
                  <input
                    type="file"
                    accept="video/*"
                    className="hidden"
                    onChange={(e) => handleMediaUpload(e, setFieldValue)}
                    ref={fileInputRef}
                  />
                  <img src={VideoIcon} alt="Upload video" className="w-6 h-6 inline-block" />
                </label>
                <label className="mr-2 cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleMediaUpload(e, setFieldValue)}
                  />
                  <img src={ImageIcon} alt="Upload image" className="w-6 h-6 inline-block" />
                </label>
              </div>
            </div>

            <button
              type="submit"
              className={`w-full py-2 px-4 rounded-lg transition-colors duration-300 ${
                isValid && dirty
                  ? 'bg-custom-red text-white hover:bg-red-700'
                  : 'bg-light-blue text-text-grey cursor-not-allowed'
              }`}
              disabled={!(isValid && dirty)}
            >
              Post
            </button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default NewRecommendationModal;