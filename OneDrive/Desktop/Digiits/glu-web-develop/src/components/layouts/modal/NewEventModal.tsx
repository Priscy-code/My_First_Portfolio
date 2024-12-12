import { useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { INewEventModal } from './interfaces/IModal';
import { NewEvent } from '../../../features/events/interfaces/EventsInterfaces';
import Modal from '../modal/Modal';
import FormInput from '../../layouts/FormInput';
import { FiMapPin, FiPlus } from 'react-icons/fi';
import AttachmentIcon from '../../../assets/manage-communities/attachment-icon.svg';
import Checked from '../../../assets/feed/events/check.svg';
import UnChecked from '../../../assets/feed/events/unchecked.svg';
import { mockMembers } from '../../../data/mockMembers';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  location: Yup.string().required('Location is required'),
  startDate: Yup.date().required('Start date is required'),
  startTime: Yup.string().required('Start time is required'),
});

const NewEventModal = ({ isOpen, onClose, onCreateEvent }: INewEventModal) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const initialValues: Partial<NewEvent> = {
    title: '',
    description: '',
    isInPerson: true,
    location: '',
    startDate: '',
    startTime: '',
    repeatFrequency: 'Never',
    coHosts: [],
    images: [],
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
    <Modal isOpen={isOpen} onClose={onClose} title="New Event">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          onCreateEvent(values);
          setSubmitting(false);
          onClose();
        }}
      >
        {({ values, errors, touched, isValid, dirty, setFieldValue, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="p-6">
            <div className="flex flex-wrap items-center mb-6">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer m-2"
              >
                <img src={AttachmentIcon} alt="Attachment" className="h-8 w-8" />
              </button>
              {values.images?.map((image, index) => (
                <div key={index} className="relative m-2">
                  <img src={image} alt={`upload-${index}`} className="w-24 h-24 object-cover rounded" />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index, setFieldValue, values.images || [])}
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
                onChange={(e) => handleImageUpload(e, setFieldValue, values.images || [])}
              />
            </div>

            <FormInput label="Title">
              <Field
                type="text"
                name="title"
                className="w-full p-2 outline-none"
                placeholder="Enter event title"
              />
              {errors.title && touched.title && (
                <div className="text-red-500 text-sm mt-1">{errors.title}</div>
              )}
            </FormInput>

            <FormInput label="Description">
              <Field
                as="textarea"
                name="description"
                className="w-full p-2 outline-none resize-none"
                placeholder="Enter event description"
                rows={3}
              />
              {errors.description && touched.description && (
                <div className="text-red-500 text-sm mt-1">{errors.description}</div>
              )}
            </FormInput>

            <div className="mb-4">
              <span className="text-sm font-semibold mb-2 block">Is this a physical or virtual event?</span>
              <div className="flex space-x-4">
                <button
                  type="button"
                  className={`flex items-center justify-center px-4 py-2 rounded-lg ${
                    values.isInPerson ? 'bg-blue-100 border-2 border-custom-blue' : 'bg-gray-100'
                  }`}
                  onClick={() => setFieldValue('isInPerson', true)}
                >
                  <img src={values.isInPerson ? Checked : UnChecked} alt="checkbox" className="mr-2" />
                  In Person
                </button>
                <button
                  type="button"
                  className={`flex items-center justify-center px-4 py-2 rounded-lg ${
                    !values.isInPerson ? 'bg-blue-100 border-2 border-custom-blue' : 'bg-gray-100'
                  }`}
                  onClick={() => setFieldValue('isInPerson', false)}
                >
                  <img src={!values.isInPerson ? Checked : UnChecked} alt="checkbox" className="mr-2" />
                  Virtual
                </button>
              </div>
            </div>

            <FormInput label="Location">
              <div className="flex items-center">
                <FiMapPin className="text-gray-400 mr-2" />
                <Field
                  type="text"
                  name="location"
                  className="w-full p-2 outline-none"
                  placeholder="Search location..."
                />
              </div>
              {errors.location && touched.location && (
                <div className="text-red-500 text-sm mt-1">{errors.location}</div>
              )}
            </FormInput>

            <div className="flex space-x-4 mb-4">
              <FormInput label="Start Date">
                <div className="flex items-center">
                  <Field
                    type="date"
                    name="startDate"
                    className="w-full p-2 outline-none"
                  />
                </div>
                {errors.startDate && touched.startDate && (
                  <div className="text-red-500 text-sm mt-1">{errors.startDate}</div>
                )}
              </FormInput>

              <FormInput label="Start Time">
                <div className="flex items-center">
                  <Field
                    type="time"
                    name="startTime"
                    className="w-full p-2 outline-none"
                  />
                </div>
                {errors.startTime && touched.startTime && (
                  <div className="text-red-500 text-sm mt-1">{errors.startTime}</div>
                )}
              </FormInput>
            </div>

            <div className="mb-4">
              <button type="button" className="text-red-500 font-semibold flex items-center mx-2">
                 Add End Date <FiPlus className="mr-2" />
              </button>
            </div>

            <FormInput label="Repeat Frequency">
              <Field
                as="select"
                name="repeatFrequency"
                className="w-full p-2 outline-none"
              >
                <option value="Never">Never</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </Field>
            </FormInput>

            <div className="mb-4">
              <h3 className="font-semibold mb-2 my-4 mx-2">Add Co-Host</h3>
              <div className="flex flex-wrap gap-2">
                {values.coHosts?.map((coHost) => (
                  <div key={coHost.id} className="flex items-center bg-gray-100 rounded-full p-1">
                    <img src={coHost.image} alt={coHost.name} className="w-8 h-8 rounded-full mr-2" />
                    <span className="mr-2">{coHost.name}</span>
                    <button
                      type="button"
                      onClick={() => {
                        const updatedCoHosts = values.coHosts?.filter(h => h.id !== coHost.id) || [];
                        setFieldValue('coHosts', updatedCoHosts);
                      }}
                      className="text-red-500"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
              <Field
                as="select"
                name="newCoHost"
                className="w-full p-2 outline-none mt-2"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  const selectedId = Number(e.target.value);
                  const selectedMember = mockMembers.find(m => m.id === selectedId);
                  if (selectedMember && !values.coHosts?.some(h => h.id === selectedId)) {
                    setFieldValue('coHosts', [...(values.coHosts || []), selectedMember]);
                  }
                }}
              >
                <option value="">Select a co-host</option>
                {mockMembers.map((member) => (
                  <option key={member.id} value={member.id}>
                    {member.name}
                  </option>
                ))}
              </Field>
            </div>

            <button
              type="submit"
              className={`w-full py-2 px-4 rounded-lg transition-colors duration-300 ${
                isValid && dirty
                  ? 'bg-red-600 text-[#F2F7FB] hover:bg-red-700'
                  : 'bg-[#F2F7FB] text-[#7D7E80] cursor-not-allowed'
              }`}
              disabled={!(isValid && dirty)}
            >
              Create Event
            </button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default NewEventModal;