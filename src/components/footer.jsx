import React from 'react'

export default function Footer({ numOfHours }) {
    return (
      <footer>
        <p>
          Created by{" "}
          <a href="https://prabe.sh" target="_blank" rel="noopener">
            Prabesh {/* numOfHours*/}
          </a>{" "}
        </p>
      </footer>
    );
}
