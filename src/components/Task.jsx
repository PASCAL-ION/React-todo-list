import PropTypes from 'prop-types';

export default function Tasks({task, onClick}) {
    return (
      <li id="task-row">
          <label>
              <input type="checkbox" id="checkbox"/>
              <span id="task-text">{task.name}</span>
          </label>
          <button className="delete-task" onClick={onClick}>
              <span>Delete</span>
          </button>
      </li>
    );
}

Tasks.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired
};
