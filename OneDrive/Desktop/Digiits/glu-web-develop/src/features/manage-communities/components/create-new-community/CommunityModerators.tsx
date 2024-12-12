import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import FormInput from '../../../../components/layouts/FormInput';
import { mockMembers } from '../../../../data/mockMembers';
import RemoveIcon from '../../../../assets/manage-communities/remove-icon.svg';
import Friends from '../../../../assets/feed/members/friends.svg';
import Posts from '../../../../assets/feed/members/posts.svg';

const validationSchema = Yup.object().shape({
  moderator: Yup.string().required('Moderator name is required'),
});

const CommunityModerators = () => {
  const [moderators, setModerators] = React.useState<typeof mockMembers>([]);

  const addModerator = (moderatorName: string) => {
    const moderator = mockMembers.find(member => member.name.toLowerCase() === moderatorName.toLowerCase());
    if (moderator && !moderators.find(mod => mod.name === moderator.name)) {
      setModerators([...moderators, moderator]);
    }
  };

  const removeModerator = (moderatorName: string) => {
    setModerators(moderators.filter(mod => mod.name !== moderatorName));
  };

  const getModeratorWidth = () => {
    const count = moderators.length;
    if (count === 1) return 'w-full';
    if (count === 2) return 'w-1/2';
    if (count === 3) return 'w-1/3';
    return 'w-1/4';
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Community Moderators</h2>
      <Formik
        initialValues={{ moderator: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          addModerator(values.moderator);
          resetForm();
        }}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form>
            <FormInput label="Moderator">
              <Field name="moderator" type="text" className="w-full outline-none pb-1" placeholder="Search user's name" />
            </FormInput>
            {errors.moderator && touched.moderator && !isValid && dirty && (
              <div className="text-red-500 text-sm mt-1">{errors.moderator}</div>
            )}
          </Form>
        )}
      </Formik>
      <div className="mt-4 flex flex-wrap -mx-2">
        {moderators.map((moderator, index) => (
          <div key={index} className={`${getModeratorWidth()} px-2 mb-4`}>
            <div className="bg-light-blue p-2 rounded">
              <div className="flex items-center justify-between bg-[#FDFEFF] p-2 rounded">
                <div className="flex items-center flex-grow">
                  <img src={moderator.image} alt={moderator.name} className="w-10 h-10 rounded-full mr-3" />
                  <div className="flex-grow">
                    <p className="font-semibold truncate">{moderator.name}</p>
                    <div className="flex items-center text-sm text-gray-600">
                      <img src={Friends} alt="Friends" className="w-4 h-4 mr-1" />
                      <span className="mr-2">{moderator.friendsCount}</span>
                      <img src={Posts} alt="Posts" className="w-4 h-4 mr-1" />
                      <span>{moderator.postsCount}</span>
                    </div>
                  </div>
                </div>
                <button onClick={() => removeModerator(moderator.name)} className="text-red-500 ml-2">
                  <img src={RemoveIcon} alt="Remove Moderator" className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityModerators;