import flet as ft

def main(page: ft.Page):
    # පිටුවේ මූලික සැකසුම්
    page.title = "Developios | Digital Agency Portfolio"
    page.bgcolor = "#001930" 
    page.padding = 20
    page.scroll = "auto"
    
    # 1. NAVBAR
    navbar = ft.Container(
        content=ft.Row(
            controls=[
                ft.Text("Developios", size=24, weight=ft.FontWeight.BOLD, color="#111111"),
                ft.Row(
                    controls=[
                        ft.TextButton("Home", style=ft.ButtonStyle(color="#111111")),
                        ft.TextButton("About", style=ft.ButtonStyle(color="#555555")),
                        ft.TextButton("Projects", style=ft.ButtonStyle(color="#555555")),
                    ],
                    alignment=ft.MainAxisAlignment.CENTER,
                    expand=True
                ),
                ft.Container(
                    content=ft.Text("Get in Touch", color="white", weight=ft.FontWeight.W_600),
                    bgcolor="#111111",
                    padding=ft.Padding(20, 10, 20, 10),
                    border_radius=20,
                )
            ],
            alignment=ft.MainAxisAlignment.SPACE_BETWEEN
        ),
        padding=10
    )

    # 2. HERO SECTION
    hero_section = ft.Container(
        content=ft.Row(
            controls=[
                ft.Column(
                    controls=[
                        ft.Row([
                            ft.Text("⭐ ⭐ ⭐ ⭐ ⭐", size=14),
                            ft.Container(width=5),
                            ft.Text("5.0 Rating", weight=ft.FontWeight.BOLD, size=14, color="#83b655"),
                        ], spacing=2),
                        
                        ft.Text(
                            "UX-First Design\nAgency for Tech",
                            size=40,
                            weight=ft.FontWeight.BOLD,
                            color="#111111"
                        ),
                        
                        ft.Text(
                            "We help startups to design MVPs and build smart software systems.",
                            size=16, color="#555555"
                        ),
                        
                        ft.Container(height=15),
                        
                        ft.Container(
                            content=ft.Text("Start a Project 🚀", color="white", weight=ft.FontWeight.BOLD),
                            bgcolor="#111111",
                            padding=ft.Padding(30, 15, 30, 15),
                            border_radius=30,
                        )
                    ],
                    expand=1,
                    alignment=ft.MainAxisAlignment.CENTER
                ),
                
                ft.Container(
                    content=ft.Text("</>", size=60, color="#83b655", weight=ft.FontWeight.BOLD),
                    bgcolor="#EAEAEA",
                    border_radius=20,
                    expand=1,
                    height=300
                )
            ],
        ),
        padding=20
    )

    # 3. TECH STACK SECTION
    logos_section = ft.Container(
        content=ft.Column(
            controls=[
                ft.Text("MY DIGITAL TOOLS & FRAMEWORKS", size=12, color="#888888", weight=ft.FontWeight.BOLD),
                ft.Container(height=10),
                ft.Row(
                    controls=[
                        ft.Container(content=ft.Text("Python", color="white"), bgcolor="#3776AB", padding=10, border_radius=5),
                        ft.Container(content=ft.Text("Flet", color="white"), bgcolor="#0052CC", padding=10, border_radius=5),
                        ft.Container(content=ft.Text("SQLite", color="white"), bgcolor="#003B57", padding=10, border_radius=5),
                        ft.Container(content=ft.Text("Arduino", color="white"), bgcolor="#00979D", padding=10, border_radius=5),
                    ],
                    alignment=ft.MainAxisAlignment.SPACE_EVENLY,
                )
            ],
            horizontal_alignment=ft.CrossAxisAlignment.CENTER
        ),
        padding=20
    )

    page.add(navbar, hero_section, logos_section)

# වර්ෂන් දෙකටම ගැළපෙන ආරක්ෂිතම රන් කමාන්ඩ් එක
ft.app(target=main, view=ft.AppView.WEB_BROWSER)