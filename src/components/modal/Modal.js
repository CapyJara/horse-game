import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './modal.css';
import { postNewGame } from '../../actions/horseActions';
import loadingSpinner from '../../../assets/unicorn-5.png';
import { getNewGame } from '../../selectors/horseSelectors';


const Modal = ({ isOpen, setModalIsOpen, lines, lastTouchTime, history }) => {
  const dispatch = useDispatch();
  const postedGame = useSelector(getNewGame);
  
  const [codeName, setCodeName] = useState('');
  const [loading, setLoading] = useState(false);
  const handleCodeNameChange = ({ target }) => {
    setCodeName(target.value);
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    dispatch(postNewGame({
      score: lines || 0,
      name: codeName,
      totalTime: lastTouchTime || 0
    }));
  };
  
  useEffect(() => {
    if(postedGame) {
      setLoading(false);
      history.push(`/leader/100/${codeName}/${lines}`);
    }
  });

  return (  
    <div className={isOpen ? styles.Modal : styles.Hidden}>
      <section className={styles.Content}>

        <section className={styles.Close}>
          <button onClick={() => setModalIsOpen(false)}>X</button>
        </section>

        <form onSubmit={handleSubmit} >
          <header>
            <h1>Holy Guacamole!!</h1>
            <h2>you scored</h2>
            <h3>{lines} lines</h3>
          </header>

          {!loading && <div>
            <input 
              type="text"
              placeholder="Enter your CodeName"
              onChange={handleCodeNameChange}
              maxLength="20"
              required
            />
            <button>Submit your score</button>
          </div>}
          {loading && <div className={styles.Loading}>
            <img src={loadingSpinner} />
          </div>}
        </form>

      </section>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setModalIsOpen: PropTypes.func.isRequired,
  lines: PropTypes.number.isRequired,
  lastTouchTime: PropTypes.number,
  history: PropTypes.object
};

export default Modal;
