import { useState } from 'react';
import styles from '../Modules/Description.module.css';

function Description() {
  const [expanded, setExpanded] = useState(false);
  const toggleDescription = () => setExpanded(!expanded);

  const description = `
601K views  •  12 days ago  #كازينو_الالعاب  #casinoel3ab  #مروان_سري
لو عجبتك الحلقة متنساش تعمل لايك و شير و تشترك معانا في القناة عشان تبقى واحد من عيلة اللعبة
رقم السجل الضريبي 775 - 318 - 
#مروان_سري #casinoelal3ab  #كازينو_الالعاب 

اشتري لعبة كازينو الالعاب النسخة التانية من هنا 🎰👇 
https://arcadeeg.com/collections/fron...

تابعو صفحات الستور من هنا عشان تعرف كل التفاصيل 👇
https://www.facebook.com/arcadestoreg...    
https://www.instagram.com/arcadestore... 

تابع شركة كازينو الالعاب من هنا عشان تشوف كل منتجاتهم الاخري 👇
https://casinoal3ab.com 

للدعاية و الاعلان و التواصل ارسل رسالة علي الايميل ده 
INFO@ARCADEEG.COM   

الموقع الرسمي للشركة المنتجة 
www.arcadeeg.com

تابع حسابات مروان سري علي السوشيال ميديا
Facebook:   / marwanserry  
Instagram:   / marwanserry  
Twitter:   / serrymarwan  
Tiktok:   / marwanserry   

تابعوا مو من هنا 👇 
https://www.instagram.com/moe3arkan?i...
تابعوا  بوب من هنا 👇  
https://www.instagram.com/aahmedbahaa...
----------------------------------------------------------------------------------- 
Arcade Films قنوات 
------------------------------
لو بحب الكورة و مش عايز تسمع تحليل او تكتيك لازم تتابع قناة الرزع الساخر
‪@erza3ma3serry‬ 
لو ليك في الافلام و المسلسلات اوعي تفوت احمد كمال في بتاع افلام 
‪@Beta3aflam‬ 
-------------------------------------
693
`;

  const lines = description.trim().split('\n');
  const firstLine = lines[0];
  const [highlightPart, ...restOfFirstLine] = firstLine.split('  #');
  const tagsPart = restOfFirstLine.length ? '#'+restOfFirstLine.join('  #') : '';

  const fullDescription = lines.slice(1).join('\n');
  const shortDescription = lines.slice(1, 3).join('\n');
  const isOverflowing = lines.length > 3;

  return (
    <div className={styles.descriptionBox}>
      <div className={styles.firstLine}>
        <span className={styles.highlight}>{highlightPart.trim()}</span>
        {tagsPart && <span className={styles.tags}>  #{tagsPart}</span>}
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
