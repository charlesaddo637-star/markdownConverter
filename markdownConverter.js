const markInput=document.getElementById("markdown-input");
const rawOutput=document.getElementById("html-output");
const preview=document.getElementById("preview");

function convertMarkdown(){
 let markdown=markInput.value;
 markdown=markdown.replace(/^###\s+(.*)$/gm,"<h3>$1</h3>");
 markdown=markdown.replace(/^##\s+(.*)$/gm,"<h2>$1</h2>");
 markdown=markdown.replace(/^#\s(.*)$/gm,"<h1>$1</h1>");
 markdown=markdown.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>");
 markdown=markdown.replace(/__(.*?)__/g,"<strong>$1</strong>");
 markdown=markdown.replace(/\*(.*?)\*/g,"<em>$1</em>");
 markdown=markdown.replace(/_(.*?)_/g,"<em>$1</em>");
 markdown=markdown.replace(/!\[(.*)\]\((.*)\)/g,"<img src='$2' alt='$1'>");
 markdown=markdown.replace(/\[(.*)\]\((.*)\)/gm,"<a href='$2'>$1</a>");
 markdown=markdown.replace(/^>\s+(.*)$/gm,"<blockquote>$1</blockquote>");
 rawOutput.textContent=markdown;
 preview.innerHTML=markdown;
 return markdown;
}
markInput.addEventListener("input",convertMarkdown)
