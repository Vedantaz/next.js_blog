import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  return <div className={styles.container}>
    <h2 className={styles.heading}>UI Doctor Coder</h2>
    <p>What is Doctor Coder ?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor dolores excepturi cum rerum voluptates, veniam expedita ipsam rem quaerat laborum quas aliquid perferendis ut, officia libero quasi! Blanditiis, qui maxime repellat animi facilis tempore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum maxime quod ullam, ipsam hic vel quo odio reiciendis pariatur quia aut doloremque nihil rerum temporibus earum delectus veritatis accusamus sequi officiis saepe aliquam. Numquam minus necessitatibus, asperiores aut voluptatem fuga facilis tempora laudantium temporibus voluptatibus. </p>
    <h2 className={styles.heading}>Services offered</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque mollitia enim eius numquam aliquid distinctio dolorum fugit, velit labore fuga incidunt maxime saepe tenetur repudiandae magni autem repellendus ex iste iure. Neque, tempore perspiciatis!</p>
    <ul>
      <li>Service 1</li>
      <li>Service 2</li>
      <li>Service 3</li>
      <li>Service 4</li>
      <li>Service 5</li>
    </ul>
    <h2 className={styles.heading}>Contact Us</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque mollitia enim eius numquam aliquid distinctio dolorum fugit, velit labore fuga incidunt maxime saepe tenetur repudiandae magni autem repellendus ex iste iure. Neque, tempore perspiciatis!</p>
  </div>
};
export default About;