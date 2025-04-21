document.addEventListener("DOMContentLoaded", () => {
  const categories = document.querySelector(".categories");
  const projects = document.querySelectorAll(".project");
  const scrollTopBtn = document.querySelector(".scroll-top");

  // 카테고리 필터 기능
  categories.addEventListener("click", (e) => {
    const target = e.target.closest("button");
    if (!target) return;

    const category = target.dataset.category.toLowerCase(); // 소문자로 변환

    // 선택된 카테고리 스타일 적용
    [...target.parentElement.children].forEach((btn) =>
      btn.classList.remove("category--selected")
    );
    target.classList.add("category--selected");

    // 프로젝트 필터링
    projects.forEach((project) => {
      const projectType = project.dataset.type.toLowerCase(); // 소문자로 변환
      project.classList.toggle(
        "hidden",
        category !== "all" && projectType !== category
      );
    });
  });

  // 위로 가기 버튼 기능
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
