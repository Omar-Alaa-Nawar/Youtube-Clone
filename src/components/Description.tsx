import { useState } from 'react';
import styles from '../Modules/Description.module.css';

interface DescriptionProps {
  text: string;
}

function Description({ text }: DescriptionProps) {
  const [expanded, setExpanded] = useState(false);
  const toggleDescription = () => setExpanded(!expanded);

  // Trim and split input text into lines
  const lines = text.trim().split('\n');
  const firstLine = lines[0];
  const [highlightPart, ...restOfFirstLine] = firstLine.split('  #');
  const tagsPart = restOfFirstLine.length ? '#' + restOfFirstLine.join('  #') : '';

  const fullDescription = lines.slice(1).join('\n');
  const shortDescription = lines.slice(1, 3).join('\n'); // only show first 2 lines initially
  const isOverflowing = lines.length > 3;

  return (
    <div className={styles.descriptionBox}>
      <div className={styles.firstLine}>
        <span className={styles.highlight}>{highlightPart.trim()}</span>
        {tagsPart && <span className={styles.tags}>  {tagsPart}</span>}
      </div>

      <pre className={styles.descriptionText}>
        {expanded ? fullDescription : shortDescription}
      </pre>

      {isOverflowing && (
        <button className={styles.toggleButton} onClick={toggleDescription}>
          {expanded ? 'Show less' : '...more'}
        </button>
      )}
    </div>
  );
}

export default Description;
