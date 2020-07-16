<template>
  <v-app>
    <v-content>
      <v-container>
        <div
          class="display-2 font-weight-medium"
          style="color:#ffffff!important;"
        >Please add your details here</div>
        <v-divider class="mx-4" dark></v-divider>
        <v-divider class="mx-4" dark></v-divider>
        <v-divider class="mx-4" dark></v-divider>
        <br />
        <br />

        <div
          class="display-1 font-weight-medium"
          style="color:#ffffff!important;"
        >1. Personal Details</div>
        <v-divider class="mx-4" dark></v-divider>
        <br />
        <v-row>
          <v-col cols="12" sm="12" md="12">
            <v-text-field
              label="Fullname"
              placeholder="Fullname"
              v-model="userdetails.fullname"
              name="fullname"
              type="text"
              id="fullname"
              required
              style="color:#ffffff!important;"
              background-color="#24292e"
              outlined
              color="#ffffff"
              class="title"
              dark
            />

            <v-text-field
              label="Tagline"
              placeholder="Tagline eg. Web Developer"
              v-model="userdetails.title"
              name="tagline"
              type="text"
              required
              id="tagline"
              style="color:#ffffff!important;"
              background-color="#24292e"
              outlined
              color="#ffffff"
              class="title"
              dark
            />

            <v-text-field
              label="Email"
              placeholder="Email"
              v-model="userdetails.email"
              name="email"
              type="text"
              required
              id="email"
              style="color:#ffffff!important;"
              background-color="#24292e"
              outlined
              color="#ffffff"
              class="title"
              dark
            />

            <v-textarea
              label="About"
              v-model="userdetails.about"
              placeholder="About Yourself"
              name="about"
              type="text"
              id="about"
              required
              style="color:#ffffff!important;"
              background-color="#24292e"
              outlined
              color="#ffffff"
              class="title"
              dark
            />

            <v-text-field
              label="github"
              v-model="userdetails.github"
              placeholder="github link"
              name="github"
              type="text"
              id="github"
              style="color:#ffffff!important;"
              background-color="#24292e"
              outlined
              color="#ffffff"
              class="title"
              dark
            />

            <v-text-field
              label="linkdin"
              v-model="userdetails.linkdin"
              placeholder="linkdin link"
              name="linkdin"
              type="text"
              id="linkdin"
              style="color:#ffffff!important;"
              background-color="#24292e"
              outlined
              color="#ffffff"
              class="title"
              dark
            />

            <v-text-field
              label="facebook"
              v-model="userdetails.facebook"
              placeholder="facebook link"
              name="facebook"
              type="text"
              id="facebook"
              style="color:#ffffff!important;"
              background-color="#24292e"
              outlined
              color="#ffffff"
              class="title"
              dark
            />

            <v-text-field
              label="instagram"
              v-model="userdetails.instagram"
              placeholder="instagram link"
              name="instagram"
              type="text"
              id="instagram"
              style="color:#ffffff!important;"
              background-color="#24292e"
              outlined
              color="#ffffff"
              class="title"
              dark
            />

            <v-text-field
              label="Blog"
              v-model="userdetails.blog"
              placeholder="Blog link"
              name="blog"
              type="text"
              id="blog"
              style="color:#ffffff!important;"
              background-color="#24292e"
              outlined
              color="#ffffff"
              class="title"
              dark
            />
            <v-text-field
              label="twitter"
              v-model="userdetails.twitter"
              placeholder="twitter link"
              name="twitter"
              type="text"
              id="twitter"
              style="color:#ffffff!important;"
              background-color="#24292e"
              outlined
              color="#ffffff"
              class="title"
              dark
            />

            <v-text-field
              label="Other"
              placeholder="Other link"
              v-model="userdetails.other"
              name="Other"
              type="text"
              id="other"
              style="color:#ffffff!important;"
              background-color="#24292e"
              outlined
              color="#ffffff"
              class="title"
              dark
            />

            <br />
            <div class="display-1 font-weight-medium" style="color:#ffffff!important;">
              2. Add Your Projects
              <v-btn
                @click="addNewProject"
                style="cursor:pointer; color:#24292e"
                class="subtitle-2 ml-auto"
              >Add Project</v-btn>
            </div>
            <br />
            <v-divider class="mx-4" dark></v-divider>

            <v-col v-for="(project,i) in userdetails.projects" :key="i">
              <br />

              <v-row>
                <v-col lg="6" md="6" sm="6">
                  <div
                    class="headline font-weight-medium"
                    style="color:#ffffff!important;"
                  >{{i+1}}. Projects</div>
                </v-col>

                <v-col lg="6" md="6">
                  <v-btn
                    @click="deleteProject(i)"
                    style="cursor:pointer; color:#24292e"
                    class="subtitle-2 float-right"
                  >Cancel</v-btn>
                </v-col>
              </v-row>

              <v-text-field
                label="Project Name"
                placeholder="Project Name"
                name="project"
                type="text"
                id="project"
                v-model="project.project"
                style="color:#ffffff!important;"
                background-color="#24292e"
                outlined
                color="#ffffff"
                class="title"
                dark
              />

              <v-row>
                <v-col cols="10" sm="5">
                  <v-menu>
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="project.from"
                        label="Start Month"
                        :value="project.from"
                        v-on="on"
                        style="color:#ffffff!important;"
                        background-color="#24292e"
                        outlined
                        color="#ffffff"
                        class="title"
                        dark
                      ></v-text-field>
                    </template>
                    <v-date-picker type="month" v-model="project.from"></v-date-picker>
                  </v-menu>
                </v-col>

                <v-spacer></v-spacer>

                <v-col cols="10" sm="5">
                  <v-menu>
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="project.to"
                        label="End Month"
                        :value="project.to"
                        v-on="on"
                        style="color:#ffffff!important;"
                        background-color="#24292e"
                        outlined
                        color="#ffffff"
                        class="title"
                        dark
                      ></v-text-field>
                    </template>
                    <v-date-picker type="month" v-model="project.to"></v-date-picker>
                  </v-menu>
                </v-col>

                <v-col cols="3" sm="1">
                  <v-checkbox
                    style="color:#ffffff!important;"
                    background-color="#24292e"
                    dark
                    class="float-right"
                    v-model="project.to"
                    value="Present"
                    :label="`Present:`"
                  ></v-checkbox>
                </v-col>
              </v-row>
              <v-textarea
                label="Description"
                placeholder="Describe Your Project"
                name="description"
                type="text"
                id="description"
                v-model="project.description"
                style="color:#ffffff!important;"
                background-color="#24292e"
                outlined
                color="#ffffff"
                class="title"
                dark
              />

              <v-text-field
                label="github link"
                placeholder="Github link if you have"
                name="gitlink"
                type="text"
                id="gitlink"
                v-model="project.gitlink"
                style="color:#ffffff!important;"
                background-color="#24292e"
                outlined
                color="#ffffff"
                class="title"
                dark
              />

              <v-text-field
                label="Website"
                placeholder="Website link if you have"
                name="weblink"
                type="text"
                id="weblink"
                v-model="project.weblink"
                style="color:#ffffff!important;"
                background-color="#24292e"
                outlined
                color="#ffffff"
                class="title"
                dark
              />
            </v-col>
            <br />

            <div class="display-1 font-weight-medium" style="color:#ffffff!important;">
              3. Add Your Work Experience
              <v-btn
                @click="addNewwork"
                style="cursor:pointer; color:#24292e"
                class="subtitle-2 ml-auto"
              >Add Work</v-btn>
            </div>
            <br />
            <v-divider class="mx-4" dark></v-divider>

            <v-col v-for="(work,i) in userdetails.works" :key="i">
              <br />
              <v-row>
                <v-col lg="6" md="6" sm="6">
                  <div
                    class="headline font-weight-medium"
                    style="color:#ffffff!important;"
                  >{{i+1}}. Work Experience</div>
                </v-col>

                <v-col lg="6" md="6">
                  <v-btn
                    @click="deleteWork(i)"
                    style="cursor:pointer; color:#24292e"
                    class="subtitle-2 float-right"
                  >Cancel</v-btn>
                </v-col>
              </v-row>
              <br />

              <v-text-field
                label="Company Name"
                placeholder="Company Name"
                name="company"
                type="text"
                id="company"
                v-model="work.company"
                style="color:#ffffff!important;"
                background-color="#24292e"
                outlined
                color="#ffffff"
                class="title"
                dark
              />

              <v-text-field
                label="Role"
                placeholder="Your Role"
                name="role"
                type="text"
                id="role"
                v-model="work.role"
                style="color:#ffffff!important;"
                background-color="#24292e"
                outlined
                color="#ffffff"
                class="title"
                dark
              />

              <v-row>
                <v-col cols="10" sm="5">
                  <v-menu>
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="work.from"
                        label="Start Month"
                        :value="work.from"
                        v-on="on"
                        style="color:#ffffff!important;"
                        background-color="#24292e"
                        outlined
                        color="#ffffff"
                        class="title"
                        dark
                      ></v-text-field>
                    </template>

                    <v-date-picker type="month" v-model="work.from"></v-date-picker>
                  </v-menu>
                </v-col>

                <v-spacer></v-spacer>

                <v-col cols="10" sm="5">
                  <v-menu>
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="work.to"
                        label="End Month"
                        :value="work.to"
                        v-on="on"
                        style="color:#ffffff!important;"
                        background-color="#24292e"
                        outlined
                        color="#ffffff"
                        class="title"
                        dark
                      ></v-text-field>
                    </template>

                    <v-date-picker type="month" v-model="work.to"></v-date-picker>
                  </v-menu>
                </v-col>

                <v-col cols="3" sm="1">
                  <v-checkbox
                    style="color:#ffffff!important;"
                    background-color="#24292e"
                    dark
                    class="float-right"
                    v-model="work.to"
                    value="Present"
                    :label="`Present:`"
                  ></v-checkbox>
                </v-col>
              </v-row>

              <v-textarea
                label="Description"
                placeholder="Describe Your Work"
                name="describework"
                type="text"
                id="describework"
                v-model="work.details"
                style="color:#ffffff!important;"
                background-color="#24292e"
                outlined
                color="#ffffff"
                class="title"
                dark
              />
            </v-col>

            <br />
            <div
              class="display-1 font-weight-medium"
              style="color:#ffffff!important;"
            >4. Add Your Education</div>
            <v-divider class="mx-4" dark></v-divider>
            <br />

            <v-text-field
              label="University Name"
              placeholder="University Name"
              name="college"
              type="text"
              id="college"
              v-model="userdetails.education.college"
              style="color:#ffffff!important;"
              background-color="#24292e"
              outlined
              color="#ffffff"
              class="title"
              dark
            />

            <v-text-field
              label="Degree"
              placeholder="Your Degree"
              name="degree"
              type="text"
              id="degree"
              v-model="userdetails.education.degree"
              style="color:#ffffff!important;"
              background-color="#24292e"
              outlined
              color="#ffffff"
              class="title"
              dark
            />

            <v-row>
              <v-col cols="11" sm="5">
                <v-menu>
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="userdetails.education.from"
                      label="Join Month"
                      :value="userdetails.education.from"
                      v-on="on"
                      style="color:#ffffff!important;"
                      background-color="#24292e"
                      outlined
                      color="#ffffff"
                      class="title"
                      dark
                    ></v-text-field>
                  </template>

                  <v-date-picker type="month" v-model="userdetails.education.from"></v-date-picker>
                </v-menu>
              </v-col>

              <v-spacer></v-spacer>

              <v-col cols="11" sm="5">
                <v-menu>
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="userdetails.education.to"
                      label="End Month"
                      :value="userdetails.education.to"
                      v-on="on"
                      style="color:#ffffff!important;"
                      background-color="#24292e"
                      outlined
                      color="#ffffff"
                      class="title"
                      dark
                    ></v-text-field>
                  </template>

                  <v-date-picker type="month" v-model="userdetails.education.to"></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>

            <v-textarea
              label="About Your University"
              placeholder="About Your University"
              name="aboutuniversity"
              type="text"
              id="aboutuniversity"
              v-model="userdetails.education.about"
              style="color:#ffffff!important;"
              background-color="#24292e"
              outlined
              color="#ffffff"
              class="title"
              dark
            />

            <br />
            <div class="display-1 font-weight-medium" style="color:#ffffff!important;">
              5. Add Your Skills
              <v-btn
                @click="addNewskill"
                style="cursor:pointer; color:#24292e"
                class="subtitle-2 ml-auto"
              >Add More</v-btn>
            </div>
            <br />
            <v-divider class="mx-4" dark></v-divider>

            <v-col v-for="(skill,i) in userdetails.skills" :key="i">
              <v-row>
                <v-col lg="6" md="6" sm="6">
                  <div
                    class="headline font-weight-medium"
                    style="color:#ffffff!important;"
                  >{{i+1}}. Skill</div>
                </v-col>

                <v-col lg="6" md="6">
                  <v-btn
                    @click="deleteSkill(i)"
                    style="cursor:pointer; color:#24292e"
                    class="subtitle-2 float-right"
                  >Cancel</v-btn>
                </v-col>
              </v-row>
              <br />

              <v-text-field
                label="Skill"
                placeholder="Skill"
                name="skill"
                type="text"
                id="skill"
                v-model="skill.skill"
                style="color:#ffffff!important;"
                background-color="#24292e"
                outlined
                color="#ffffff"
                class="title"
                dark
              />
            </v-col>
            <div class="display-1 font-weight-medium" style="color:#ffffff!important;">
              6. Add Your Achievements
              <v-btn
                @click="addNewachievements"
                style="cursor:pointer; color:#24292e"
                class="subtitle-2 ml-auto"
              >Add More</v-btn>
              <br />
              <br />
              <v-divider class="mx-4" dark></v-divider>
            </div>
            <v-divider class="mx-4" dark></v-divider>

            <v-col v-for="(achievement,i) in userdetails.achievements" :key="i">
              <v-row>
                <v-col lg="6" md="6" sm="6">
                  <div
                    class="headline font-weight-medium"
                    style="color:#ffffff!important;"
                  >{{i+1}}. Achievement</div>
                </v-col>

                <v-col lg="6" md="6">
                  <v-btn
                    @click="deleteAchievement(i)"
                    style="cursor:pointer; color:#24292e"
                    class="subtitle-2 float-right"
                  >Cancel</v-btn>
                </v-col>
              </v-row>
              <br />

              <v-text-field
                label="achievement"
                placeholder="Achievements"
                name="achievement"
                type="text"
                id="achievement"
                v-model="achievement.achievement"
                style="color:#ffffff!important;"
                background-color="#24292e"
                outlined
                color="#ffffff"
                class="title"
                dark
              />
            </v-col>

            <v-btn
              color="#ffffff"
              class="subtitle-1"
              id="submit"
              name="submit"
              v-on:click="submitDetails"
              type="submit"
              large
            >Generate Reamd.md</v-btn>

            <v-spacer />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  mounted() {},
  components: {},
  data() {
    return {
      date: new Date().toISOString().substr(0, 7),
      menu: false,
      modal: false,

      userdetails: {
        fullname: "",
        email: "",
        title: "",
        username: "",
        about: "",
        github: "",
        linkdin: "",
        facebook: "",
        instagram: "",
        other: "",
        blog: "",
        twitter: "",
        works: [
          {
            company: "",
            role: "",
            from: "",
            to: "",
            details: ""
          }
        ],
        projects: [
          {
            project: "",
            description: "",
            from: "",
            to: "",
            gitlink: "",
            weblink: ""
          }
        ],
        education: {
          college: "",
          degree: "",
          from: "",
          to: "",
          about: ""
        },
        skills: [
          {
            skill: ""
          }
        ],
        achievements: [
          {
            achievement: ""
          }
        ]
      }
    };
  },
  methods: {
    submitDetails: function() {
      const json2md = require("json2md");

      var userdetails = {
        fullname: this.userdetails.fullname,
        title: this.userdetails.title,
        email: this.userdetails.email,
        about: this.userdetails.about,
        github: this.userdetails.github,
        linkdin: this.userdetails.linkdin,
        facebook: this.userdetails.facebook,
        instagram: this.userdetails.instagram,
        other: this.userdetails.other,
        blog: this.userdetails.blog,
        twitter: this.userdetails.twitter,
        works: this.userdetails.works,
        projects: this.userdetails.projects,
        education: this.userdetails.education,
        skills: this.userdetails.skills,
        achievements: this.userdetails.achievements
      };

      // json2md.converters.userdetails_edu = function() {
      //   var edu = [];

      //   edu.push(
      //     "College Name : " +
      //       userdetails.education.college +
      //       "\n Degree name: " +
      //       userdetails.education.degree +
      //       "\n From : " +
      //       userdetails.education.from +
      //       "\n to :" +
      //       userdetails.education.to +
      //       "\n About Your University :" +
      //       userdetails.education.about +
      //       "\n"
      //   );

      //   return edu;
      // };

      json2md.converters.userdetails_projects = function() {
        var i, j;
        var project = [];

        for (i = 0; i < userdetails.projects.length; i++) {
          project.push(userdetails.projects[i]);
        }

        var projectfinal = [];
        for (j = 0; j < project.length; j++) {
          projectfinal.join(" ");
          projectfinal.push(
            "\n" +
              "-" +
              " <h4>Project Name : " +
              project[j].project +
              "</h4> \n" +
              "   " +
              "<h4> Project Description : " +
              project[j].description +
              "</h4> \n" +
              "   " +
              "<h4>  From : " +
              project[j].from +
              "</h4> \n " +
              "   " +
              "<h4>  to :" +
              project[j].to +
              "</h4> \n" +
              "   " +
              "<h4>  Github Link :" +
              project[j].gitlink +
              "</h4> \n" +
              "   " +
              "<h4>  Website Link :" +
              project[j].weblink +
              "</h4> \n" +
              " "
          );
        }
        return projectfinal;
      };

      json2md.converters.userdetails_works = function() {
        var i, j;
        var work = [];
        console.log(userdetails.works.length);
        for (i = 0; i < userdetails.works.length; i++) {
          work.push(userdetails.works[i]);
        }

        var workfinal = [];
        for (j = 0; j < work.length; j++) {
          workfinal.push(
            "\n" +
              "Company Name : " +
              work[j].company +
              "\n Work Role : " +
              work[j].role +
              "\n From : " +
              work[j].from +
              "\n to :" +
              work[j].to +
              "\n Details :" +
              work[j].details +
              "\n"
          );
        }
        return workfinal;
      };

      json2md.converters.userdetails_skills = function() {
        var i;
        var skill = [];
        for (i = 0; i < userdetails.skills.length; i++) {
          console.log(userdetails.skills[i].skill);
          skill.push(userdetails.skills[i].skill);
        }
        // skill.join("");
        return skill;
      };
      json2md.converters.userdetails_achievements = function() {
        var i;
        var achievement = [];
        for (i = 0; i < userdetails.achievements.length; i++) {
          achievement.push(userdetails.achievements[i].achievement);
        }
        return achievement;
      };
      console.log(
        json2md([
          {
            p:
              "<a href=" +
              userdetails.facebook +
              '> <img align="left" src="https://img.icons8.com/color/48/000000/facebook.png"></img></a>'
          },

          { h1: "Hello Know me better" },

          {
            h4: "Name:" + userdetails.fullname
          },
          {
            h4: "Position:" + userdetails.title
          },
          {
            h4: "Email:" + userdetails.email
          },
          {
            h4: "About Myself:" + userdetails.about
          },

          {
            link: [
              {
                title: "Github",
                source: userdetails.github
              },
              {
                title: "Linkedin",
                source: userdetails.linkedin
              },
              {
                title: "Facebook",
                source: userdetails.facebook
              },
              {
                title: "Instagram",
                source: userdetails.instagram
              },

              {
                title: "Blog",
                source: userdetails.blog
              },

              {
                title: "Twitter",
                source: userdetails.twitter
              },

              {
                title: "Other",
                source: userdetails.other
              }
            ]
          },
          {
            ul: [
              "<h1>Education</h1>",
              [
                "<h4>College Name: " +
                  userdetails.education.college +
                  "</h4>\n",
                "<h4>Degree: " + userdetails.education.degree + "</h4>\n",
                "<h4>From:" + userdetails.education.from + "</h4>\n",
                "<h4>To: " + userdetails.education.to + "</h4>\n",
                "<h4>About College: " + userdetails.education.about + "</h4>"
              ]
            ]
          },
          {
            userdetails_works: ""
          },
          {
            h1: "Projects"
          },
          {
            userdetails_projects: ""
          },
          {
            userdetails_skills: ""
          },
          {
            userdetails_achievements: ""
          }
        ])
      );
    },
    addNewProject() {
      this.userdetails.projects.push({
        project: "",
        description: "",
        from: "",
        to: "",
        details: "",
        gitlink: "",
        weblink: ""
      });
    },
    addNewskill() {
      this.userdetails.skills.push({
        skill: ""
      });
    },
    addNewachievements() {
      this.userdetails.achievements.push({
        achievement: ""
      });
    },
    deleteAchievement(i) {
      this.userdetails.achievements.splice(i, 1);
    },
    deleteSkill(i) {
      this.userdetails.skills.splice(i, 1);
    },
    deleteWork(i) {
      this.userdetails.works.splice(i, 1);
    },
    deleteProject(i) {
      this.userdetails.projects.splice(i, 1);
    },
    addNewwork() {
      this.userdetails.works.push({
        company: "",
        role: "",
        from: "",
        to: "",
        details: ""
      });
    }
  }
};
</script>
