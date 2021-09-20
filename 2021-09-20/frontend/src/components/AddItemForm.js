function AddItemForm() {
  return (
    <form>
      <label>Eseme nimi</label><br />
      <input type="text" placeholder="Nimi" required/><br />
      <label>Eseme hind</label><br />
      <input type="text" required/><br />
      <label>Eseme kategooria</label><br />
      <input type="text" required/><br />
      <button>Sisesta uus ese</button>
    </form>
  );
}

export default AddItemForm;