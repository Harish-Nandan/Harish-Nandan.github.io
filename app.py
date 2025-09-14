from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html", title="Home", active_page="home")

@app.route("/about")
def about():
    return render_template("about.html", title="About", active_page="about")

@app.route("/projects")
def projects():
    return render_template("projects.html", title="Projects", active_page="projects")
    
@app.route("/Certifications")
def Certifications():
    return render_template("Certifications.html", title="Certifications", active_page="Certifications")
    
@app.route("/Experience")
def Experience():
    return render_template("Experience.html", title="Experience", active_page="Experience")

@app.route("/skills")
def skills():
    return render_template("skills.html", title="skills", active_page="skills")    

if __name__ == "__main__":
    app.run(debug=True)
