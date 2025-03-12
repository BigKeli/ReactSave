import './Terminal.css';

function Terminal({ language, name, description, extraDescription, gitLink }) {
  return (
    <div className="container">
      <div className="terminal_toolbar">
        <div className="butt">
          <button className="btn btn-color"></button>
          <button className="btn"></button>
          <button className="btn"></button>
        </div>
        <p className="user">{language}@{name}: ~</p>
        <a href={gitLink} className="clickable-text" target="_blank" rel="noopener noreferrer">
          Repository Link
        </a>
        <div className="add_tab">+</div>
      </div>
      
      <div className="terminal_body">
        <div className="terminal_prompt">
          <span className="terminal_user">{language}@{name}:</span>
          <span className="terminal_location">~</span>
          <span className="terminal_bling">$</span>
          <span className="terminal_text">{description}</span>
        </div>

        {/* TODO: Conditionally render extra description */}
        {extraDescription && (
          <div className="terminal_prompt">
            <span className="terminal_user">{language}@{name}:</span>
            <span className="terminal_location">~</span>
            <span className="terminal_bling">$</span>
            <span className="terminal_text">{extraDescription}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Terminal;
