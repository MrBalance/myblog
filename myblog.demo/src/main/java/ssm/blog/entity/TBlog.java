package ssm.blog.entity;


public class TBlog {
	private Integer id;
    private String title;
    private String summary;
    private String content;
    private String keyWord; //关键字，用空格隔开
    private BlogType blogType; //博客类型
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getSummary() {
		return summary;
	}
	public void setSummary(String summary) {
		this.summary = summary;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getKeyWord() {
		return keyWord;
	}
	public void setKeyWord(String keyWord) {
		this.keyWord = keyWord;
	}
	public BlogType getBlogType() {
		return blogType;
	}
	public TBlog() {
		super();
		// TODO Auto-generated constructor stub
	}
	public void setBlogType(BlogType blogType) {
		this.blogType = blogType;
	}
	@Override
	public String toString() {
		return "TBlog [id=" + id + ", title=" + title + ", summary=" + summary + ", content=" + content + ", keyWord="
				+ keyWord + ", blogType=" + blogType + "]";
	}
	public TBlog(Integer id, String title, String summary, String content, String keyWord, BlogType blogType) {
		super();
		this.id = id;
		this.title = title;
		this.summary = summary;
		this.content = content;
		this.keyWord = keyWord;
		this.blogType = blogType;
	}

}
