export default function HeaderButton({
  isExpanded,
  setIsExpanded,
  setNavItemsVisible,
}) {
  const styles = {
    container: {
      height: "50px",
      width: "50px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      padding: "0px",
      marginTop: "8px",
      marginRight: "4px",
    },
    line: {
      height: "2px",
      width: "20px",
      background: "rgb(31, 41, 55)",
      transition: "all 0.5s ease",
    },
    lineTop: {
      transform: isExpanded ? "rotate(45deg)" : "none",
      transformOrigin: "top left",
      marginBottom: "5px",
    },
    lineMiddle: {
      opacity: isExpanded ? 0 : 1,
    },
    lineBottom: {
      transform: isExpanded ? "translateX(-1px) rotate(-45deg)" : "none",
      transformOrigin: "top left",
      marginTop: "5px",
    },
  };

  const handleClick = () => {
    setNavItemsVisible(true);
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={styles.container} onClick={handleClick}>
      <div style={{ ...styles.line, ...styles.lineTop }} />
      <div style={{ ...styles.line, ...styles.lineMiddle }} />
      <div style={{ ...styles.line, ...styles.lineBottom }} />
    </div>
  );
}
