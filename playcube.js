const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".navbar a[href]").forEach((link) => {
	const linkPage = new URL(link.href, window.location.href).pathname.split("/").pop();

	if (linkPage === currentPage) {
		link.classList.add("active");
		link.setAttribute("aria-current", "page");
	}
});
