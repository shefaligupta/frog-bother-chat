import React from 'react';
import Button from '@material-ui/core/Button';

/**
 * HenchmenList class.
 * @param {Function} setHenchman
 * @param {string} man
 * @returns {*}
 * @constructor
 */
function HenchmenList({setHenchman, man}) {
  const allHenchmen = ['Sonny', 'Fredo', 'Michael'];
  return (
      <div className="henchman">
        {
          allHenchmen.map((henchman, index) => (
              <div key={`Henchman-${index}`} className="button-henchmen">
                <Button
                    variant="contained"
                    className={man === henchman ? `active-button` : `select-henchman`}
                    disableElevation
                    onClick={() => setHenchman(henchman)}
                >
                  {henchman}
                </Button>
              </div>
          ))
        }
      </div>
  );
}

export default HenchmenList;