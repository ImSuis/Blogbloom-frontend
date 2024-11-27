// src/components/Sidebar.js
import React, { useState } from 'react';

const Sidebar = () => {
    const categories = ['Technology', 'Travel', 'Food', 'Fashion']; // Add your categories

    const [selectedCategories, setSelectedCategories] = useState([]);

    const toggleCategory = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    return (
        <div>
            <div>
                <h2>Filter by Category</h2>
                <div>
                    {categories.map((category) => (
                        
                        <button
                            key={category}
                            className={`btn ${selectedCategories.includes(category) ? 'btn-dark' : 'btn-light'}`}
                            onClick={() => toggleCategory(category)}
                            style={{ margin: '5px' }} // Add margin for spacing
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
            {/* Add other sidebar content here */}
        </div>
    );
};

export default Sidebar;
