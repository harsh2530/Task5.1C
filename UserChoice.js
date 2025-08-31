import React from 'react';
import { Form, Radio } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './sharesection.css';   // fixed path

function UserChoice({ postType, setPostType }) {
  const handlePostTypeChange = (event, { value }) => {
    setPostType(value);
  };

  return (
    <div>
      <div className="header">Create Post</div>
      <br />
      <Form>
        <Form.Field>
          <label>Choose Post Category:</label>
          <Form.Group>
            <Radio
              label="Question"
              name="postType"
              value="question"
              checked={postType === 'question'}
              onChange={handlePostTypeChange}
            />
            &nbsp;&nbsp;
            <Radio
              label="Article"
              name="postType"
              value="article"
              checked={postType === 'article'}
              onChange={handlePostTypeChange}
            />
          </Form.Group>
        </Form.Field>
      </Form>
      <br />
      <div className="header">What would you like to share or ask</div>
      <div>
        <p>
          This part changes depending on the type of post you select, handled through conditional rendering.
        </p>
        {postType === 'question' && (
          <p className="red-text">When you choose “Question”, the section below will be shown.</p>
        )}
        {postType === 'article' && (
          <p className="red-text">When you choose “Article”, the section below will be displayed.</p>
        )}
      </div>
    </div>
  );
}

export default UserChoice;