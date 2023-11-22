const Searchbar = () => {
  //   const handleSumbit = e => {
  //     e.preventDefault();
  //     const form = e.currentTarget;
  //     const inputValue = form.elements.search.value.trim().toLowerCase();

  //     return onSubmit(inputValue);
  //   };

  return (
    <header class="searchbar">
      <form class="form">
        <button type="submit" class="button">
          <span class="button-label">Search</span>
        </button>

        <input
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
export default Searchbar;
