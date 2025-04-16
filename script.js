function konfirm() {
  const yakin = confirm("YAKIN MAU NGASIH TAU?");
  if (yakin) {
    window.location.href = "rickroll.html";
    return false;
  }
  return false;
}