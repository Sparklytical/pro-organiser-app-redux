import React, { useEffect } from 'react';
import styles from './Home.module.css';
import commonStyles from './../../common/styles/styles.module.css';
import { Link } from 'react-router-dom';
import { Alert } from '../../common/alert/Alert';
import { Loader } from '../../common/loader/Loader';
import { connect } from 'react-redux';
import { loadBoards } from '../../redux/actions/boards';

export const Home = ({ boards, loading, loadBoards }) => {

  useEffect(() => {
    loadBoards('admin@jones.com');
  }, [loadBoards]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          <h2 className={commonStyles.title}>Boards</h2>
          {boards.length === 0 && (
            <Alert type="info" isClosable={false}>
              You haven't created any boards. Kindly click on the 'Create a
              Board' button in the navigation bar to create a board.
            </Alert>
          )}
          <div className={styles.boards}>
            {boards.map((board) => {
              return (
                <Link
                  to={'/board/' + board.id}
                  className={styles.board}
                  key={board.id}
                >
                  <div className={styles.boardName}>{board.name}</div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    boards: state.boards.allBoards,
    loading: state.boards.loadingBoards,
  };
};

export default connect(mapStateToProps, { loadBoards })(Home);
