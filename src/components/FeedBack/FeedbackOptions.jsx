import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      <ul>
        {Object.keys(options).map(key => (
          <li key={key}>
            <button id={key} onClick={onLeaveFeedback}>
              {key}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.objectOf(PropTypes.number),
};
