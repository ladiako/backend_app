package com.project.re.ressources;

import com.project.re.Dto.FormLogin;
import com.project.re.entities.Utilisateur;
import com.project.re.services.UtilisateurServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:3006")
@RestController
@RequestMapping(value="/utilisateur")
public class UtilisateurRessources {
    private final UtilisateurServices utilisateurServices;

    @Autowired
    public UtilisateurRessources(UtilisateurServices utilisateurServices) {
        this.utilisateurServices = utilisateurServices;
    }

    @GetMapping("/list-user")
    public Page<Utilisateur> getUser(Pageable pageable) {
        return utilisateurServices.getAllUtilisateur(pageable);
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> login(@RequestBody FormLogin formLogin) throws Exception{
        Utilisateur utilisateur = utilisateurServices.login(formLogin);
        if(utilisateur == null){
            return ResponseEntity.ok(false);
        }
        return ResponseEntity.ok(utilisateurServices.login(formLogin));
    }

    @PostMapping("/add-edit")
    public ResponseEntity<Utilisateur> addEditUser(@RequestBody Utilisateur utilisateur) throws Exception {
        return ResponseEntity.ok().body(utilisateurServices.addEditUtilisateur(utilisateur));
    }

    @GetMapping("/delete/{id}")
    public void deleteUser(@PathVariable("id") long id) {
        try {
            utilisateurServices.deleteEmployee(id);
        } catch (Exception ex) {
            ex.getMessage();
        }
    }
}
