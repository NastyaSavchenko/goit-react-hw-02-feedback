import css from './section.module.css';
import PT from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div>
      <h2 className={css.title}>{title}</h2>
      {children}
    </div>
  );
};

export default Section

Section.propTypes = {
    title: PT.string.isRequired,
    children: PT.any.isRequired,
}