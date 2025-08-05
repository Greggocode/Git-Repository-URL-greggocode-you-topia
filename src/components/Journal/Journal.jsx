import React, { useState } from 'react';

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState('');

  const handleEntryChange = (e) => {
    setNewEntry(e.target.value);
  };

  const handleEntrySubmit = (e) => {
    e.preventDefault();
    if (newEntry.trim()) {
      setEntries([...entries, newEntry]);
      setNewEntry('');
    }
  };

  return (
    <div>
      <h2>Journal</h2>
      <form onSubmit={handleEntrySubmit}>
        <textarea
          value={newEntry}
          onChange={handleEntryChange}
          placeholder="Write your journal entry here..."
        />
        <button type="submit">Add Entry</button>
      </form>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
};

export default Journal;