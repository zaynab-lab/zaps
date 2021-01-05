export default function TitleBox({ title, color }) {
  return (
    <>
      <div className="title">{title}</div>
      <style jsx>{`
        .title {
          background: ${color};
          color: white;
          padding: 0.8rem 0.5rem;
          font-size: 1.5rem;
          text-align: center;
          width: 12rem;
          border-radius: 0.5rem;
        }
      `}</style>
    </>
  );
}
