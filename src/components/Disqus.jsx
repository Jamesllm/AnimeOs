export default function Disqus() {
  (function () {
    // DON'T EDIT BELOW THIS LINE
    var d = document,
      s = d.createElement("script");
    s.src = "https://animelandia-vercel-app.disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    (d.head || d.body).appendChild(s);
  })();
  return (
    <div className="my-2">
      <div id="disqus_thread"></div>
    </div>
  );
}
