import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Editor } from '@tinymce/tinymce-react';
import Modal from './Modal';
import FormInput from '../../layouts/FormInput';
import { INewTopicModalProps } from './interfaces/IModal';
import { ChevronDown } from 'lucide-react';

import GeneralInfoIcon from '../../../assets/feed/forums/gen-info.svg';
import AnnouncementIcon from '../../../assets/feed/forums/ann-icon.svg';
import HelpIcon from '../../../assets/feed/forums/help-icon.svg';
import MeetupsIcon from '../../../assets/feed/forums/meetups-events-icon.svg';
import TipsIcon from '../../../assets/feed/forums/tips-icon2.svg';
import JobsIcon from '../../../assets/feed/forums/jobs-icon2.svg';
import WarningsIcon from '../../../assets/feed/forums/warnings-icon.svg';
import OthersIcon from '../../../assets/feed/forums/others2-icon.svg';

const categories = [
  'General Info',
  'Announcement',
  'Need Help/Advice',
  'Meetups/Events',
  'Tips',
  'Jobs/Housing',
  'Warnings',
  'Others'
];

const categoryStyles: Record<string, { bgColor: string; icon: string }> = {
  'General Info': { bgColor: '#3498db', icon: GeneralInfoIcon },
  'Announcement': { bgColor: '#FF9800', icon: AnnouncementIcon },
  'Need Help/Advice': { bgColor: '#F44336', icon: HelpIcon },
  'Meetups/Events': { bgColor: '#4CAF50', icon: MeetupsIcon },
  'Tips': { bgColor: '#2196F3', icon: TipsIcon },
  'Jobs/Housing': { bgColor: '#FFC107', icon: JobsIcon },
  'Warnings': { bgColor: '#E91E63', icon: WarningsIcon },
  'Others': { bgColor: '#9C27B0', icon: OthersIcon }
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  category: Yup.string().required('Category is required'),
  content: Yup.string().required('Content is required')
});

const NewTopicModal = ({ isOpen, onClose, onCreateTopic }: INewTopicModalProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const initialValues = {
    title: '',
    category: categories[0],
    content: ''
  };

  const handleSubmit = (values: typeof initialValues) => {
    onCreateTopic(values);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="New Topic">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, isValid, dirty, setFieldValue }) => (
          <Form className="space-y-4">
            <FormInput label="Title" active={true}>
              <Field
                type="text"
                name="title"
                placeholder="Enter"
                className="w-full p-2 focus:outline-none"
              />
            </FormInput>
            {errors.title && touched.title && (
                <div className="text-red-500 text-sm mt-1">{errors.title}</div>
            )}

            <FormInput label="Category" active={true}>
              <div className="relative">
                <div
                  className="mt-2 flex items-center justify-between cursor-pointer p-2 border rounded-lg"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span
                    className="py-1 px-3 text-white flex items-center rounded-lg"
                    style={{ backgroundColor: categoryStyles[values.category]?.bgColor }}
                  >
                    <img
                      src={categoryStyles[values.category]?.icon}
                      alt={values.category}
                      className="h-4 w-4 mr-2"
                    />
                    {values.category}
                  </span>
                  <ChevronDown className="text-gray-500" />
                </div>

                {isDropdownOpen && (
                  <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                    {categories.map((cat) => (
                      <div
                        key={cat}
                        onClick={() => {
                          setFieldValue('category', cat);
                          setIsDropdownOpen(false);
                        }}
                        className="p-2 flex items-center hover:bg-gray-100 cursor-pointer"
                      >
                        <img
                          src={categoryStyles[cat]?.icon}
                          alt={cat}
                          className="h-4 w-4 mr-2"
                        />
                        <span>{cat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {errors.category && touched.category && (
                <div className="text-red-500 text-sm mt-1">{errors.category}</div>
              )}
            </FormInput>

            <FormInput label="What do you want to share?" active={true}>
              <Editor
                apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
                init={{
                  height: 300,
                  menubar: false,
                  plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                  ],
                  toolbar: 'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                  placeholder: 'Type here. Use markdown, BB code or html to format. You can also drag and drop images in here'
                }}
                value={values.content}
                onEditorChange={(newContent) => setFieldValue('content', newContent)}
              />
              {errors.content && touched.content && (
                <div className="text-red-500 text-sm mt-1">{errors.content}</div>
              )}
            </FormInput>

            <button
              type="submit"
              className={`w-full py-2 px-4 rounded-lg transition-colors duration-300 ${
                isValid && dirty
                  ? 'bg-[#B41317] text-white hover:bg-red-700'
                  : 'bg-[#F2F7FB] text-[#7D7E80] cursor-not-allowed'
              }`}
              disabled={!(isValid && dirty)}
            >
              Create
            </button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default NewTopicModal;