export default function Question({ questionText, children }) {
    return (
      <>
        <div>
          {questionText}
          <span>{children}</span>
        </div>
      </>
    );
  }