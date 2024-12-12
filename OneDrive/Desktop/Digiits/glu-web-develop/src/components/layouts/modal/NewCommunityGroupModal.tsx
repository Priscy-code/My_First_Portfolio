import React, { useRef, useState } from 'react';
import { Formik, Form, Field, FieldProps } from 'formik';
import * as Yup from 'yup';
import Modal from './Modal';
import { Community } from '../../../features/communities/interfaces/CommunitiesInterfaces';
import { INewCommunityGroupModal } from './interfaces/IModal';
import FormInput from '../../layouts/FormInput';
import AttachmentIcon from '../../../assets/manage-communities/attachment-icon.svg';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Group name is required'),
  description: Yup.string().required('Group description is required'),
  location: Yup.string().required('Location is required'),
  tags: Yup.array().of(Yup.string()).min(1, 'At least one tag is required').max(5, 'Maximum 5 tags allowed'),
});

const NewCommunityGroupModal = ({ isOpen, onClose, onCreateCommunity }: INewCommunityGroupModal) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeField, setActiveField] = useState<string | null>(null);

  const initialValues = {
    name: '',
    description: '',
    location: '',
    tags: [] as string[],
    images: [] as string[],
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, setFieldValue: (field: string, value: any) => void, currentImages: string[]) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setFieldValue('images', [...currentImages, ...newImages]);
    }
  };

  const handleRemoveImage = (index: number, setFieldValue: (field: string, value: any) => void, currentImages: string[]) => {
    setFieldValue('images', currentImages.filter((_, i) => i !== index));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="New Community Group">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          const newCommunity: Partial<Community> = {
            name: values.name,
            description: values.description,
            location: values.location,
            contentImages: values.images,
            tags: values.tags,
          };
          onCreateCommunity(newCommunity);
          setSubmitting(false);
          onClose();
        }}
      >
        {({ values, errors, touched, setFieldValue, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="p-6">
            <div className="flex flex-wrap items-center mb-6">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer m-2"
              >
                <img src={AttachmentIcon} alt="Attachment" className="h-8 w-8" />
              </button>
              {values.images.map((image, index) => (
                <div key={index} className="relative m-2">
                  <img src={image} alt={`upload-${index}`} className="w-24 h-24 object-cover rounded" />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index, setFieldValue, values.images)}
                    className="absolute bottom-1 right-1 bg-red-600 text-white rounded-full p-1 text-xs"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                multiple
                onChange={(e) => handleImageUpload(e, setFieldValue, values.images)}
              />
            </div>

            <div className="space-y-6">
              <FormInput label="Group Name" active={activeField === 'name'}>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full outline-none pb-1"
                  placeholder="Enter group name"
                  onFocus={() => setActiveField('name')}
                  onBlur={() => setActiveField(null)}
                />
              </FormInput>
              
              {errors.name && touched.name && (
                <div className="text-red-500 text-sm mt-1">{errors.name}</div>
              )}

              <FormInput label="Group Description" active={activeField === 'description'}>
                <Field
                  as="textarea"
                  id="description"
                  name="description"
                  className="w-full outline-none pb-1"
                  placeholder="Enter group description"
                  rows={3}
                  onFocus={() => setActiveField('description')}
                  onBlur={() => setActiveField(null)}
                />
              </FormInput>
              {errors.description && touched.description && (
                <div className="text-red-500 text-sm mt-1">{errors.description}</div>
              )}

              <FormInput label="Location" active={activeField === 'location'}>
                <Field
                  type="text"
                  id="location"
                  name="location"
                  className="w-full outline-none pb-1"
                  placeholder="Start typing city name..."
                  onFocus={() => setActiveField('location')}
                  onBlur={() => setActiveField(null)}
                />
              </FormInput>
              {errors.location && touched.location && (
                <div className="text-red-500 text-sm mt-1">{errors.location}</div>
              )}

              <FormInput label="Add Tags" active={activeField === 'tags'}>
                <Field name="tags">
                  {({ field, form }: FieldProps) => (
                    <div className="flex flex-wrap items-center">
                      {field.value.map((tag: string, index: number) => (
                        <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2 mb-2">
                          {tag}
                          <button
                            type="button"
                            className="ml-1 text-gray-500"
                            onClick={() => {
                              const newTags = [...field.value];
                              newTags.splice(index, 1);
                              form.setFieldValue('tags', newTags);
                            }}
                          >
                            ×
                          </button>
                        </span>
                      ))}
                      <input
                        type="text"
                        className="flex-grow px-2 py-1 outline-none"
                        placeholder="Enter tag and press Enter"
                        onFocus={() => setActiveField('tags')}
                        onBlur={() => setActiveField(null)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && e.currentTarget.value.trim() !== '' && field.value.length < 5) {
                            e.preventDefault();
                            form.setFieldValue('tags', [...field.value, e.currentTarget.value.trim()]);
                            e.currentTarget.value = '';
                          }
                        }}
                      />
                    </div>
                  )}
                </Field>
              </FormInput>
              {errors.tags && touched.tags && (
                <div className="text-red-500 text-sm mt-1">{errors.tags}</div>
              )}
              <p className="text-xs text-gray-800 mt-1"><span className="text-red-500">*</span> Seperate each tag with a comma "," - Maximum 5 tags</p>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-300"
              >
                Create
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default NewCommunityGroupModal;